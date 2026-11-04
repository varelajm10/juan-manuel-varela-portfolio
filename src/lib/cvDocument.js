import { content, personalInfo } from '../data/portfolioData.js';

const labels = {
  es: {
    profile: 'Perfil',
    experience: 'Trayectoria',
    education: 'Formación',
    projects: 'Proyectos',
    skills: 'Habilidades',
    fileName: personalInfo.cvFileName,
  },
  en: {
    profile: 'Profile',
    experience: 'Experience',
    education: 'Education',
    projects: 'Projects',
    skills: 'Skills',
    fileName: personalInfo.cvFileNameEn,
  },
};

function sectionTitle(text, pageBreak) {
  return {
    stack: [
      { text, style: 'section' },
      {
        canvas: [
          {
            type: 'line',
            x1: 0,
            y1: 0,
            x2: 515,
            y2: 0,
            lineWidth: 0.6,
            lineColor: '#d4d4d8',
          },
        ],
        margin: [0, 2, 0, 6],
      },
    ],
    margin: [0, pageBreak ? 0 : 10, 0, 0],
    pageBreak,
  };
}

function plain(value, lang) {
  const arrow = lang === 'en' ? 'to' : 'a';
  return String(value || '').replaceAll('\u2794', arrow);
}

export function cvFileName(lang) {
  return (labels[lang] || labels.es).fileName;
}

export function buildCvDefinition(lang) {
  const copy = content[lang] || content.es;
  const t = labels[lang] || labels.es;
  const experience = copy.experience;
  const education = experience.education;

  const contact = [
    personalInfo.location[lang],
    personalInfo.phone,
    personalInfo.email,
    'linkedin.com/in/juan-m-varela1984',
    'github.com/varelajm10',
  ].join('  ·  ');

  const body = [
    { text: personalInfo.name, style: 'name' },
    { text: personalInfo.role[lang], style: 'role' },
    { text: contact, style: 'contact' },
    sectionTitle(t.profile),
    { text: plain(copy.hero.storyP1, lang), style: 'body', margin: [0, 0, 0, 4] },
    ...copy.metrics.map((metric) => ({
      text: [
        { text: plain(metric.value, lang), bold: true, noWrap: true },
        { text: ` — ${plain(metric.label, lang)}` },
      ],
      style: 'body',
      margin: [0, 1, 0, 0],
    })),
    sectionTitle(t.experience),
  ];

  experience.items.forEach((item) => {
    body.push({
      text: [
        { text: plain(item.role, lang), bold: true },
        { text: `  ·  ${plain(item.period, lang)}`, color: '#52525b' },
      ],
      style: 'jobTitle',
      margin: [0, 4, 0, 0],
    });
    body.push({
      text: plain(`${item.company} · ${item.location}`, lang),
      style: 'meta',
    });
    body.push({ text: plain(item.summary, lang), style: 'body', margin: [0, 2, 0, 2] });
    body.push({
      ul: item.achievements.map((achievement) => plain(achievement, lang)),
      style: 'bullet',
    });
  });

  const educationBlocks = [sectionTitle(t.education)];
  education.items.forEach((item) => {
    const place = item.place ? ` — ${item.place}` : '';
    const detail = item.detail ? `. ${item.detail}` : '';
    educationBlocks.push({
      text: [
        { text: plain(item.name, lang), bold: true },
        { text: plain(`${place}${detail}`, lang) },
      ],
      style: 'body',
      margin: [0, 1, 0, 1],
    });
  });

  body.push(sectionTitle(t.projects, 'before'));
  copy.projects.items.forEach((project) => {
    body.push({ text: plain(project.title, lang), style: 'jobTitle', margin: [0, 3, 0, 0] });
    body.push({ text: plain(project.impact || project.impactMetric, lang), style: 'body' });
  });

  body.push(sectionTitle(t.skills));
  copy.skills.blocks.forEach((block) => {
    body.push({ text: plain(block.category, lang), style: 'jobTitle', margin: [0, 3, 0, 1] });
    block.items.forEach((item) => {
      body.push({
        text: [
          { text: plain(item.name, lang), bold: true },
          { text: ` — ${plain(item.detail, lang)}` },
        ],
        style: 'body',
        margin: [0, 0, 0, 1],
      });
    });
  });

  body.push(...educationBlocks);

  return {
    pageSize: 'A4',
    pageMargins: [36, 32, 36, 40],
    info: {
      title: `${personalInfo.name} — CV`,
      author: personalInfo.name,
      subject: personalInfo.role[lang],
    },
    defaultStyle: {
      font: 'Roboto',
      fontSize: 8.5,
      color: '#18181b',
      lineHeight: 1.12,
    },
    styles: {
      name: { fontSize: 18, bold: true, color: '#09090b' },
      role: { fontSize: 11, color: '#0369a1', margin: [0, 2, 0, 4] },
      contact: { fontSize: 8, color: '#52525b' },
      section: { fontSize: 11, bold: true, color: '#09090b' },
      body: { fontSize: 8.5, color: '#27272a' },
      jobTitle: { fontSize: 10, bold: true, color: '#09090b' },
      period: { fontSize: 8, color: '#52525b', alignment: 'right' },
      meta: { fontSize: 8.5, color: '#3f3f46', margin: [0, 1, 0, 0] },
      bullet: { fontSize: 8.5, color: '#27272a' },
      metricValue: { fontSize: 11, bold: true, color: '#09090b' },
      metricLabel: { fontSize: 7.5, color: '#3f3f46', margin: [0, 1, 0, 0] },
    },
    footer: (currentPage, pageCount) => ({
      text: `${personalInfo.siteUrl.replace('https://', '')}  ·  ${currentPage} / ${pageCount}`,
      fontSize: 8,
      color: '#71717a',
      margin: [40, 8, 40, 0],
    }),
    content: body,
  };
}
