import { siteConfig } from "@/config/site";

/** Builds a wa.me link with a pre-filled message to the configured number. */
export function whatsappLink(message: string = siteConfig.whatsappMessages.general): string {
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function scrapEnquiryLink(material?: string): string {
  const base = siteConfig.whatsappMessages.scrap;
  return whatsappLink(material ? `${base}\n\nMaterial: ${material}` : base);
}

export function batteryEnquiryLink(product?: string): string {
  const base = siteConfig.whatsappMessages.battery;
  return whatsappLink(product ? `${base}\n\nInterested in: ${product}` : base);
}

