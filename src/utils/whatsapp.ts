export const PHONE_NUMBER = "5561981087085";
export const FORMATTED_PHONE = "(61) 98108-7085";
export const LOCATION_TEXT = "Ceilândia - DF";

export interface OrderDetails {
  productTitle: string;
  categoryName: string;
  priceText: string;
  selectedFlavor?: string;
  bentoPhrase?: string;
  sizeOption?: string;
  eventDate?: string;
  customerName?: string;
  additionalNotes?: string;
}

/**
 * Gera a URL do WhatsApp com a mensagem altamente qualificada e pré-formatada.
 */
export function generateWhatsAppLink(details: OrderDetails): string {
  const {
    productTitle,
    categoryName,
    priceText,
    selectedFlavor,
    bentoPhrase,
    sizeOption,
    eventDate,
    customerName,
    additionalNotes,
  } = details;

  let message = `✨ *NOVO PEDIDO DE CONFEITARIA - KAROLINA ATELIER* ✨\n\n`;
  message += `👋 Olá Ana Karolina! Gostaria de fazer uma encomenda:\n\n`;
  message += `📌 *Produto:* ${productTitle} (${categoryName})\n`;
  message += `💰 *Valor de Referência:* ${priceText}\n`;

  if (sizeOption) {
    message += `📏 *Tamanho/Qtd:* ${sizeOption}\n`;
  }

  if (selectedFlavor) {
    message += `🍰 *Sabor/Recheio:* ${selectedFlavor}\n`;
  }

  if (bentoPhrase && bentoPhrase.trim() !== '') {
    message += `✍️ *Frase do Bentô Cake:* "${bentoPhrase}"\n`;
  }

  if (eventDate) {
    message += `📅 *Data para Retirada/Entrega:* ${eventDate}\n`;
  }

  if (customerName) {
    message += `👤 *Meu Nome:* ${customerName}\n`;
  }

  if (additionalNotes) {
    message += `📝 *Observações:* ${additionalNotes}\n`;
  }

  message += `\n📍 *Local de Entrega/Retirada:* Ceilândia - DF\n`;
  message += `\nPodemos confirmar a disponibilidade para essa data? Obrigado(a)! ❤️`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;
}

/**
 * Gera mensagem simples para botão flutuante ou dúvidas rápidas.
 */
export function generateQuickContactLink(topic: string = "Dúvida Geral"): string {
  const message = `✨ *CONTATO RÁPIDO - KAROLINA ATELIER* ✨\n\n` +
    `Olá Ana Karolina! Vi o site e gostaria de tirar uma dúvida sobre: *${topic}* em Ceilândia-DF. Poderia me ajudar?`;

  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}
