import { BadgeCheck, Leaf, Scale, ShieldCheck, Users, Zap, type LucideIcon } from "lucide-react";
import SafeImage from "@/components/ui/SafeImage";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ButtonLink from "@/components/ui/Button";
import { whatsappLink } from "@/lib/whatsapp";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

const values: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Scale, title: "Fair Pricing", text: "Transparent rates and honest, accurate weighing." },
  { icon: ShieldCheck, title: "Reliable Service", text: "We do what we promise, on time, every time." },
  { icon: Users, title: "Customer First", text: "Friendly support for homes, shops and industries." },
  { icon: Leaf, title: "Responsible Recycling", text: "Scrap goes back into use instead of landfill." },
];

const reasons = [
  "We buy all types of old scrap — small household lots to bulk industrial scrap",
  "Competitive prices based on current market rates",
  "Quick price quotes on WhatsApp — just send a photo",
  "Used inverter batteries checked and tested before sale",
  "Clear condition details for every battery — no hidden surprises",
  "Registered business (GSTIN) located in Kottivakkam, Chennai",
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        {/* Image collage */}
        <Reveal className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="relative aspect-[4/5] w-4/5 overflow-hidden rounded-2xl shadow-2xl sm:aspect-[4/4.6]">
            <SafeImage
              src="/images/hero-scrap-yard.webp"
              alt="Crane lifting scrap metal at a scrap yard"
              fill
              sizes="(min-width: 1024px) 40vw, 80vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-[-8%] right-0 aspect-square w-1/2 overflow-hidden rounded-2xl border-8 border-white shadow-2xl">
            <SafeImage
              src="/images/thumbs/battery-collection.webp"
              alt="Used inverter batteries ready for sale"
              fill
              sizes="(min-width: 1024px) 20vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="absolute left-[-4%] top-8 hidden rounded-xl bg-primary p-5 text-white shadow-xl sm:block">
            <Zap className="h-7 w-7 text-highlight" aria-hidden="true" />
            <p className="mt-2 font-display text-2xl font-bold uppercase leading-none">Scrap &amp;</p>
            <p className="font-display text-2xl font-bold uppercase leading-none text-accent">Batteries</p>
          </div>
          <div className="absolute -right-10 -top-10 -z-10 h-48 w-48 rounded-full bg-highlight/20 blur-3xl" aria-hidden="true" />
        </Reveal>

        <div className="mt-8 lg:mt-0">
          <SectionHeading
            id="about-heading"
            eyebrow="About Us"
            title="Your Local Partner for Scrap & Used Batteries"
            align="left"
          />
          <Reveal delay={100}>
            <p className="mt-6 text-lg leading-relaxed text-body">
              <strong className="text-heading">MMR Traders</strong> is a trusted local scrap trading business specializing in
              purchasing old scrap materials and selling used inverter batteries. We focus on fair pricing, reliable service and
              customer satisfaction.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              From old iron, copper, brass and aluminium to newspapers, glass bottles, plastic and old batteries, we make it easy to
              turn unused materials into cash. We also offer quality second-hand inverter batteries so homes and shops can get
              reliable power backup at an affordable price.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <h3 className="mt-8 font-display text-xl font-bold uppercase tracking-wide text-heading">Our Business Values</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {values.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-3 rounded-lg border border-line bg-surface p-4">
                  <Icon className="mt-0.5 h-6 w-6 shrink-0 text-accent" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-heading">{title}</p>
                    <p className="text-sm text-muted">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Why choose us */}
      <div className="mx-auto mt-24 max-w-7xl px-4 sm:px-6">
        <Reveal className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 sm:px-12 lg:py-14">
          <div className="grid-pattern absolute inset-0" aria-hidden="true" />
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
          <div className="relative grid gap-10 lg:grid-cols-5 lg:items-center">
            <div className="lg:col-span-2">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Why Choose Us</span>
              <h3 className="mt-3 font-display text-3xl font-bold uppercase leading-tight text-white sm:text-4xl">
                Why Choose <span className="text-highlight">MMR Traders?</span>
              </h3>
              <p className="mt-4 text-zinc-400">
                Customers choose us for honest dealing, good prices and quick, hassle-free service.
              </p>
              <ButtonLink href={whatsappLink()} external variant="whatsapp" className="mt-7">
                <WhatsAppIcon /> Talk to Us on WhatsApp
              </ButtonLink>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
              {reasons.map((r) => (
                <li key={r} className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-zinc-200">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
