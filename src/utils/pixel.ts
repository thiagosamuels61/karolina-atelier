declare global {
  interface Window {
    fbq?: (
      type: string,
      eventName: string,
      params?: Record<string, any>
    ) => void;
  }
}

/**
 * Envia um evento padrão para o Meta Pixel.
 */
export function trackEvent(eventName: string, params?: Record<string, any>): void {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', eventName, params);
  } else {
    // Modo de desenvolvimento / Script bloqueado
    console.log(`[Meta Pixel] Evento padrão '${eventName}' omitido ou bloqueado.`, params);
  }
}

/**
 * Envia um evento personalizado para o Meta Pixel.
 */
export function trackCustomEvent(eventName: string, params?: Record<string, any>): void {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('trackCustom', eventName, params);
  } else {
    // Modo de desenvolvimento / Script bloqueado
    console.log(`[Meta Pixel] Evento personalizado '${eventName}' omitido ou bloqueado.`, params);
  }
}
