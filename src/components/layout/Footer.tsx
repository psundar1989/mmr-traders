import { ArrowRight, Mail, MapPin, Phone, FileText } from "lucide-react";
import { fullAddress, siteConfig } from "@/config/site";
import { scrapCategories } from "@/data/scrap";
import { batteryEnquiryLink, scrapEnquiryLink, whatsappLink } from "@/lib/whatsapp";
import Logo from "@/components/ui/Logo";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

const batteryLinks = [
  "Used Inverter Batteries",
  "Second-hand Tubular Batteries",
  "100Ah – 220Ah Capacities",
  "Multiple Battery Brands",
];

export default function Footer() {
  const { contact } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-primary text-zinc-400">
      {/* <div className="hazard-stripe h-2 w-full" aria-hidden="true" /> */}
      <div className="grid-pattern">
        <div className="mx-auto grid  max-w-8xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-12 lg:py-16">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-sm leading-relaxed">{siteConfig.shortDescription}</p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-whatsapp px-4 py-2.5 text-sm font-bold text-white transition hover:bg-whatsapp-dark"
            >
              <WhatsAppIcon /> Chat on WhatsApp
            </a>
          </div>

          <nav aria-label="Footer quick links" className="lg:col-span-2">
            <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="mt-5 space-y-2.5">
              {siteConfig.navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="group inline-flex items-center gap-1.5 transition hover:text-accent">
                    <ArrowRight className="h-3.5 w-3.5 text-accent transition group-hover:translate-x-0.5" aria-hidden="true" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white">Scrap Buying</h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5 lg:grid-cols-1">
              {scrapCategories.slice(0, 7).map((c) => (
                <li key={c.id}>
                  <a
                    href={scrapEnquiryLink(c.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-accent"
                  >
                    {c.name}
                  </a>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 font-display text-lg font-bold uppercase tracking-wider text-white">Used Battery Sales</h3>
            <ul className="mt-4 space-y-2.5">
              {batteryLinks.map((b) => (
                <li key={b}>
                  <a href={batteryEnquiryLink()} target="_blank" rel="noopener noreferrer" className="transition hover:text-accent">
                    {b}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white">Contact Us</h3>
            <ul className="mt-5 space-y-4">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <address className="not-italic leading-relaxed">{fullAddress}</address>
              </li>
              <li>
                <a href={`tel:${contact.phoneDial}`} className="flex gap-3 transition hover:text-accent">
                  <Phone className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" /> {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex gap-3 transition hover:text-accent">
                  <WhatsAppIcon className="h-5 w-5 shrink-0 text-whatsapp" /> {contact.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="flex gap-3 break-all transition hover:text-accent">
                  <Mail className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" /> {contact.email}
                </a>
              </li>
              <li className="flex gap-3">
                <FileText className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <span>GSTIN: {contact.gstin}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-8xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm sm:flex-row sm:px-6">
            <p>
              © {year} {siteConfig.name}. All rights reserved.
            </p>
            <p className="text-zinc-500">{siteConfig.tagline} · Kottivakkam, Chennai</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
