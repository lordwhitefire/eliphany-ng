// src/utils/whatsappMessage.ts
export function whatsappMessage(product: {
  name: string;
  id: string;
}): string {
  const text = `Hi! I’m interested in “${product.name}” (SKU: ${product.id}). Please let me know the price and availability.`;
  return encodeURIComponent(text);
}