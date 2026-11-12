import { Resend } from 'resend';

const MAX_BYTES = 12_000;
const LIMITS = {
  name: 80,
  email: 254,
  subject: 120,
  message: 4000,
};

const EMAIL_RE = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '16kb',
    },
  },
};

function sendJson(res, status, body) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.status(status).json(body);
}

function cleanLine(value, max) {
  if (typeof value !== 'string') return '';
  return value.replace(/[\u0000-\u001F\u007F]/g, '').trim().slice(0, max);
}

function cleanMessage(value, max) {
  if (typeof value !== 'string') return '';
  return value
    .replace(/\r\n/g, '\n')
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .trim()
    .slice(0, max);
}

function readPayload(req) {
  const declared = Number(req.headers['content-length'] || 0);
  if (Number.isFinite(declared) && declared > MAX_BYTES) {
    return { error: 'too_large' };
  }

  const contentType = String(req.headers['content-type'] || '');
  if (contentType && !contentType.toLowerCase().includes('application/json')) {
    return { error: 'invalid' };
  }

  let payload = req.body;
  if (Buffer.isBuffer(payload)) payload = payload.toString('utf8');
  if (typeof payload === 'string') {
    if (payload.length > MAX_BYTES) return { error: 'too_large' };
    try {
      payload = JSON.parse(payload);
    } catch {
      return { error: 'invalid' };
    }
  }

  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    return { error: 'invalid' };
  }

  return { payload };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return sendJson(res, 405, { ok: false, error: 'method' });
  }

  const parsed = readPayload(req);
  if (parsed.error === 'too_large') {
    return sendJson(res, 413, { ok: false, error: 'invalid' });
  }
  if (parsed.error) {
    return sendJson(res, 400, { ok: false, error: 'invalid' });
  }

  const { payload } = parsed;
  const honeypot = typeof payload.company_website === 'string' ? payload.company_website.trim() : '';
  if (honeypot) {
    return sendJson(res, 200, { ok: true });
  }

  const name = cleanLine(payload.name, LIMITS.name);
  const email = cleanLine(payload.email, LIMITS.email);
  const subject = cleanLine(payload.subject, LIMITS.subject);
  const message = cleanMessage(payload.message, LIMITS.message);

  const emailValid = email.length <= LIMITS.email && EMAIL_RE.test(email) && !email.includes('..');
  if (name.length < 1 || name.length > LIMITS.name || message.length < 10 || !emailValid) {
    return sendJson(res, 400, { ok: false, error: 'invalid' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('Contact form unavailable: RESEND_API_KEY is not set');
    return sendJson(res, 503, { ok: false, error: 'unavailable' });
  }

  const lines = [
    'Nueva consulta desde jmvarela.dev',
    '',
    `Nombre: ${name}`,
    `Correo: ${email}`,
  ];
  if (subject) lines.push(`Motivo: ${subject}`);
  lines.push('', 'Consulta:', message);

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: 'JMV Portfolio <contacto@jmvarela.dev>',
      to: ['juan@jmvarela.dev'],
      replyTo: email,
      subject: 'Nueva consulta desde jmvarela.dev',
      text: lines.join('\n'),
    });

    if (error || !data?.id) {
      console.error('Resend rejected the contact message');
      return sendJson(res, 502, { ok: false, error: 'unavailable' });
    }
  } catch {
    console.error('Resend request failed');
    return sendJson(res, 502, { ok: false, error: 'unavailable' });
  }

  return sendJson(res, 200, { ok: true });
}
