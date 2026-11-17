import { siteConfig } from "@/config/site";
import { scrapCategories } from "@/data/scrap";

/** schema.org LocalBusiness JSON-LD built from the central site config. */
export default function StructuredData() {
  const { contact, address, hours, maps, url } = siteConfig;

  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}/#business`,
    name: siteConfig.name,
    description: siteConfig.shortDescription,
    url,
    image: `${url}${siteConfig.seo.ogImage}`,
    telephone: contact.phoneDial,
    email: contact.email,
    taxID: contact.gstin,
    hasMap: maps.shareUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${address.line1}, ${address.line2}`,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.postalCode,
      addressCountry: address.countryCode,
    },
    areaServed: { "@type": "City", name: address.city },
    openingHoursSpecification: hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contact.phoneDial,
      contactType: "customer service",
      availableLanguage: ["English", "Tamil"],
    },
    makesOffer: [
      ...scrapCategories.map((c) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: `${c.name} buying` },
      })),
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "Used inverter batteries" },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe; escape "<" to avoid closing the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
