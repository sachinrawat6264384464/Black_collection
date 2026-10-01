import { STORE_CONFIG } from "@/config/store";
import { Product } from "@/types/product";

export type ProductEnquiryOptions = {
  selectedSize?: string;
  selectedColor?: string;
};

/**
 * Builds the WhatsApp message text for a specific product enquiry
 */
export function createWhatsAppProductMessage(
  product: Product,
  options?: ProductEnquiryOptions
): string {
  const sizeText = options?.selectedSize ? `\n• Selected Size: ${options.selectedSize}` : "";
  const colorText = options?.selectedColor ? `\n• Selected Color: ${options.selectedColor}` : "";

  const messageText = `Hello ${STORE_CONFIG.name},

I'm interested in ordering / asking about this product:

📦 Product: ${product.name}
🏷️ Brand: ${product.brand}
📂 Category: ${product.category}
💰 Price: ₹${product.price.toLocaleString("en-IN")}${product.originalPrice ? ` (Original: ₹${product.originalPrice.toLocaleString("en-IN")})` : ""}
⭐ Rating: ${product.rating}/5 (${product.ratingCount} reviews)${sizeText}${colorText}

🖼️ Product Image:
${product.images[0]}

Please share availability, delivery timeframe, and order procedure.

Thank you!`;

  return messageText;
}

/**
 * Generates the full WhatsApp URL for a product enquiry
 */
export function getWhatsAppProductUrl(
  product: Product,
  options?: ProductEnquiryOptions
): string {
  const text = createWhatsAppProductMessage(product, options);
  const encodedText = encodeURIComponent(text);
  const cleanNumber = STORE_CONFIG.whatsappNumber.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}

/**
 * Generates a general WhatsApp inquiry URL
 */
export function getWhatsAppGeneralUrl(customMessage?: string): string {
  const message = customMessage || `Hello ${STORE_CONFIG.name},\n\nI visited your store website and would like to ask a general question about your latest collections and order availability.\n\nThank you!`;
  const encodedText = encodeURIComponent(message);
  const cleanNumber = STORE_CONFIG.whatsappNumber.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}

/**
 * Helper to open WhatsApp URL in a new tab safely
 */
export function openWhatsAppEnquiry(product?: Product, options?: ProductEnquiryOptions) {
  const url = product ? getWhatsAppProductUrl(product, options) : getWhatsAppGeneralUrl();
  window.open(url, "_blank", "noopener,noreferrer");
}
