/**
 * ============================================================
 *  MMR TRADERS — CENTRAL SITE CONFIGURATION
 * ============================================================
 *  Edit this file to update business details everywhere on the
 *  website (header, footer, contact section, WhatsApp buttons,
 *  SEO metadata and LocalBusiness structured data).
 *
 *  Colours live in `src/config/theme.ts`.
 * ============================================================
 */

export const siteConfig = {
  /** Public URL of the deployed site — used for SEO / Open Graph links. */
  url: "https://www.mmrtraders.in",

  name: "MMR Traders",
  logoText: { main: "MMR", sub: "TRADERS" },
  logoImage: "/images/logo/mmr_logo5.png",
  tagline: "Scrap Buying & Used Inverter Batteries",
  shortDescription:
    "Trusted local scrap trading business in Kottivakkam, Chennai. We buy all types of old scrap materials and sell quality used inverter batteries at affordable prices.",

  contact: {
    /** Number shown for phone calls (display format + dial format). */
    phoneDisplay: "+91 98402 15653",
    phoneDial: "+919840215653",
    /** WhatsApp number: country code + number, digits only. */
    whatsappNumber: "919840215653",
    whatsappDisplay: "+91 98402 15653",
    email: "henrymmrtraders@gmail.com",
    gstin: "33AEPPH8568F1Z5",
  },

  address: {
    line1: "Old No. 2, New No. 5/417",
    line2: "Ramalinga Nagar, Kottivakkam",
    city: "Chennai",
    state: "Tamil Nadu",
    postalCode: "600041",
    country: "India",
    countryCode: "IN",
  },

  maps: {
    /** Link opened by "Get Directions" buttons. */
    shareUrl: "https://maps.app.goo.gl/gxA93Pfsg6c8f4jt6",
    /** Search query used for the embedded map. */
    embedQuery:
      "Ramalinga Nagar, Kottivakkam, Chennai, Tamil Nadu 600041",
  },

  /**
   * Business hours — shown on the site and in structured data.
   * PLEASE CONFIRM / UPDATE these to your real timings.
   */
  hours: [
    { label: "Monday – Saturday", value: "9:00 AM – 8:00 PM", days: ["Mo", "Tu", "We", "Th", "Fr", "Sa"], opens: "09:00", closes: "20:00" },
    { label: "Sunday", value: "9:00 AM – 1:00 PM", days: ["Su"], opens: "09:00", closes: "13:00" },
  ],

  /** Pre-filled WhatsApp messages. */
  whatsappMessages: {
    general:
      "Hello MMR Traders, I would like to know more about your services.",
    scrap:
      "Hello MMR Traders, I have old scrap materials to sell. Please provide your price details.",
    battery:
      "Hello MMR Traders, I am interested in purchasing a used inverter battery. Please share available models and prices.",
  },

  seo: {
    title: "MMR Traders | Scrap Buyers & Used Inverter Batteries in Kottivakkam, Chennai",
    titleTemplate: "%s | MMR Traders",
    description:
      "MMR Traders, Kottivakkam, Chennai — we buy old iron, steel, aluminium, copper, brass, newspapers, glass bottles, plastic and old batteries at the best prices, and sell quality used inverter batteries at affordable prices. Call or WhatsApp +91 98402 15653.",
    keywords: [
      "scrap buyers Chennai",
      "kailankadai",
      "old iron scrap Kottivakkam",
      "copper scrap buyers",
      "old newspaper buyers Chennai",
      "old battery scrap buyers",
      "plastic scrap buyers",
      "aluminium scrap price Chennai",
      "used inverter battery Chennai",
      "second hand inverter battery",
      "old battery sales",
      "MMR Traders",
    ],
    ogImage: "/images/steel-scrap-pile.webp",
  },

  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Scrap Buying", href: "#scrap" },
    { label: "Used Batteries", href: "#batteries" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact Us", href: "#contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

export const fullAddress = [
  siteConfig.address.line1,
  siteConfig.address.line2,
  `${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.postalCode}`,
  siteConfig.address.country,
].join(", ");
