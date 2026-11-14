// Eventos internos de conversión. No cargan scripts ni envían datos a terceros.
// Si más adelante existe window.dataLayer (por ejemplo, vía un tag manager
// configurado fuera de este repositorio), el mismo evento queda disponible ahí.

export function track(name, detail = {}) {
  if (typeof window === 'undefined') return;

  const payload = { event: name, ...detail };

  window.dispatchEvent(new CustomEvent('jmv:event', { detail: payload }));

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(payload);
  }
}
