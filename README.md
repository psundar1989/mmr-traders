# MMR Traders — Static Website

Static business website for **MMR Traders**, Kottivakkam, Chennai: old scrap buying (Kailankadai) and used inverter battery sales.

Built with Next.js 16 (App Router, static export), React 19, TypeScript, Tailwind CSS 4 and Lucide icons. It has no backend: all enquiries go to WhatsApp.

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site written to /out (upload this folder to any host)
npm run lint
```

## Where to change things

| What | File |
|---|---|
| Phone, WhatsApp number, email, GSTIN, address, map link, business hours, WhatsApp messages, SEO text, site URL, nav | `src/config/site.ts` |
| **Colours** (primary, accent, backgrounds, text…) | `src/config/theme.ts` |
| Scrap categories | `src/data/scrap.ts` |
| Battery products (brand, model, Ah, condition, price, image) | `src/data/batteries.ts` |
| Gallery images | `src/data/gallery.ts` |
| Images | `public/images/` (full size) and `public/images/thumbs/` (≈720px, used in cards) |

Before going live:
- Set `url` in `src/config/site.ts` to the real domain. It is used for SEO, Open Graph, the sitemap and structured data.
- Check the **business hours** in `site.ts`. They are placeholders.
- Replace the sample battery stock and prices.
- Replace the placeholder photos with your own. Keep the same file names, or update the data files. Credits for the current images are in `public/images/CREDITS.md`.

## Project structure

```
src/
  app/            layout (SEO metadata, theme injection), page, robots, sitemap, icon
  config/         site.ts, theme.ts  ← edit these
  data/           scrap, batteries, gallery
  lib/whatsapp.ts WhatsApp link builders
  components/
    layout/       Header, Footer, WhatsAppFloat, StructuredData (LocalBusiness JSON-LD)
    sections/     Hero, Highlights, About, ScrapBuying, Batteries, Gallery, Contact (+ cards, form)
    ui/           SafeImage (fallback on error), Reveal (scroll animation), Button, SectionHeading, Logo
```
