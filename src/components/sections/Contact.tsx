import { Clock, ExternalLink, Mail, MapPin, Phone, FileText, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { fullAddress, siteConfig } from "@/config/site";
import { whatsappLink } from "@/lib/whatsapp";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ButtonLink from "@/components/ui/Button";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import ContactForm from "./ContactForm";

function InfoRow({ icon: Icon, label, children, iconNode }: { icon?: LucideIcon; iconNode?: ReactNode; label: string; children: ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
        {iconNode ?? (Icon && <Icon className="h-5 w-5" aria-hidden="true" />)}
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">{label}</p>
        <div className="mt-0.5 font-medium text-heading">{children}</div>
      </div>
    </li>
  );
}

export default function Contact() {
  const { contact, maps, hours } = siteConfig;
  const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(`${siteConfig.name}, ${maps.embedQuery}`)}&output=embed`;

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-8xl px-4 sm:px-6">
        <SectionHeading
          id="contact-heading"
          eyebrow="Contact Us"
          title="Get in Touch with MMR Traders"
          description="Call, WhatsApp or visit our shop. Send us a message with your scrap details or the battery you need and we will get back to you quickly."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Details */}
          <Reveal className="rounded-2xl border border-line bg-surface p-6 sm:p-8 lg:col-span-2">
            <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-heading">{siteConfig.name}</h3>
            <p className="mt-1 text-muted">{siteConfig.tagline}</p>
            <ul className="mt-7 space-y-5">
              <InfoRow icon={Phone} label="Phone">
                <a href={`tel:${contact.phoneDial}`} className="hover:text-accent">{contact.phoneDisplay}</a>
              </InfoRow>
              <InfoRow iconNode={<WhatsAppIcon className="h-5 w-5 text-whatsapp" />} label="WhatsApp">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                  {contact.whatsappDisplay}
                </a>
              </InfoRow>
              <InfoRow icon={Mail} label="Email">
                <a href={`mailto:${contact.email}`} className="break-all hover:text-accent">{contact.email}</a>
              </InfoRow>
              <InfoRow icon={MapPin} label="Shop Address">
                <address className="not-italic leading-relaxed">{fullAddress}</address>
              </InfoRow>
              <InfoRow icon={Clock} label="Business Hours">
                {hours.map((h) => (
                  <p key={h.label}>
                    {h.label}: <span className="font-normal text-body">{h.value}</span>
                  </p>
                ))}
              </InfoRow>
              <InfoRow icon={FileText} label="GSTIN">
                {contact.gstin}
              </InfoRow>
            </ul>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <ButtonLink href={whatsappLink()} external variant="whatsapp">
                <WhatsAppIcon /> WhatsApp
              </ButtonLink>
              <ButtonLink href={`tel:${contact.phoneDial}`} variant="dark">
                <Phone className="h-5 w-5" aria-hidden="true" /> Call Now
              </ButtonLink>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120} className="rounded-2xl border border-line bg-white p-6 shadow-xl shadow-black/5 sm:p-8 lg:col-span-3">
            <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-heading">Send an Enquiry</h3>
            <p className="mt-1 text-muted">Fill in the form — it will open WhatsApp with your message ready to send.</p>
            <ContactForm />
          </Reveal>
        </div>

        {/* Map */}
        <Reveal className="mt-8 overflow-hidden rounded-2xl border border-line shadow-lg">
          <div className="flex flex-col items-start justify-between gap-3 bg-primary px-5 py-4 text-white sm:flex-row sm:items-center">
            <p className="flex items-center gap-2 font-semibold">
              <MapPin className="h-5 w-5 text-accent" aria-hidden="true" /> Find us in Kottivakkam, Chennai
            </p>
            <a
              href={maps.shareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2 text-sm font-semibold transition hover:bg-accent-dark"
            >
              Open in Google Maps <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <iframe
            title="MMR Traders location on Google Maps"
            src={embedSrc}
            className="h-80 w-full border-0 sm:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </Reveal>
      </div>
    </section>
  );
}
