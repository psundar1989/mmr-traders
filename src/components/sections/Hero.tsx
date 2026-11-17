import { ArrowRight, BatteryCharging, CheckCircle2, Phone, Recycle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { scrapEnquiryLink, whatsappLink } from "@/lib/whatsapp";
import ButtonLink from "@/components/ui/Button";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import HeroCarousel, { type HeroSlide } from "./HeroCarousel";

const heroSlides: HeroSlide[] = [
  { src: "/images/steel-scrap-pile.webp", alt: "Large pile of old iron and steel scrap at a scrap yard" },
  { src: "/images/scrap-yard-daikoku.webp", alt: "Metal scrap yard with a crane and piles of sorted scrap" },
  { src: "/images/scrap-yard-emr.webp", alt: "Industrial scrap metal yard with a large pile of baled scrap" },
  { src: "/images/scrap-yard-leaf-springs.webp", alt: "Heap of old iron leaf springs and metal parts in a scrap yard" },
  { src: "/images/rusty-iron-mountain.webp", alt: "Mountain of rusty iron scrap ready for recycling" },
];

const trustPoints = [
  "Fair & transparent pricing",
  "Accurate weighing",
  "All scrap types accepted",
  "Tested used batteries",
];

export default function Hero() {
  const { contact } = siteConfig;
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden bg-primary lg:min-h-[calc(100svh-7rem)]"
    >
      <HeroCarousel slides={heroSlides} />

      <div className="test mx-auto grid w-full max-w-8xl items-center gap-12 px-4 pb-24 pt-16 sm:px-6 lg:grid-cols-12 lg:pb-36 lg:pt-24">
        <div className="lg:col-span-6 [text-shadow:0_2px_14px_rgb(0_0_0/0.45)]">
          <p className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-highlight/30 bg-highlight/10 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-highlight sm:text-sm sm:tracking-[0.15em]">
            <Recycle className="h-4 w-4 shrink-0" aria-hidden="true" />
            Old Scrap Buying (Kailankadai) · Used Batteries
          </p>
          <h1
            id="hero-heading"
            className="mt-6 animate-fade-up font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-white [animation-delay:120ms] sm:text-6xl lg:text-7xl"
          >
            Your Trusted <span className="text-accent">Scrap Trading</span> Partner
          </h1>
          <p className="mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-zinc-300 [animation-delay:240ms] sm:text-xl">
            We Buy All Types of Old Scrap Materials and Sell Quality Used Inverter Batteries at Affordable Prices.
          </p>

          <div className="mt-9 flex animate-fade-up flex-col gap-3 [animation-delay:360ms] sm:flex-row sm:flex-wrap">
            <ButtonLink href="#scrap" size="lg">
              <Recycle className="h-5 w-5" aria-hidden="true" /> Sell Your Scrap
            </ButtonLink>
            <ButtonLink href="#batteries" size="lg" variant="dark" className="border-2 border-highlight/60 !bg-black/40 hover:!bg-highlight hover:text-primary">
              <BatteryCharging className="h-5 w-5" aria-hidden="true" /> Explore Batteries
            </ButtonLink>
            <ButtonLink href="#contact" size="lg" variant="outline-light">
              Contact Us <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </ButtonLink>
          </div>

          <ul className="mt-10 grid animate-fade-up grid-cols-1 gap-x-6 gap-y-3 [animation-delay:480ms] sm:grid-cols-2">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2.5 text-zinc-200">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Quick quote card */}
        <aside className="animate-fade-up [animation-delay:600ms] lg:col-span-5 lg:justify-self-end">
          <div className="relative max-w-md overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-md sm:p-8">
            {/* <div className="absolute inset-x-0 top-0 h-1.5 hazard-stripe" aria-hidden="true" /> */}
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl">
              Get the Best Price Today
            </h2>
            <p className="mt-2 text-zinc-200">
              Send a photo of your scrap on WhatsApp and get a quick price quote from our team.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href={scrapEnquiryLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl bg-whatsapp p-4 text-white transition hover:-translate-y-0.5 hover:bg-whatsapp-dark"
              >
                <WhatsAppIcon className="h-8 w-8 shrink-0" />
                <span>
                  <span className="block text-sm opacity-90">WhatsApp a photo</span>
                  <span className="block text-lg font-bold">{contact.whatsappDisplay}</span>
                </span>
              </a>
              <a
                href={`tel:${contact.phoneDial}`}
                className="flex items-center gap-4 rounded-xl border border-white/15 bg-black/30 p-4 text-white transition hover:-translate-y-0.5 hover:border-accent"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm text-zinc-300">Call us directly</span>
                  <span className="block text-lg font-bold">{contact.phoneDisplay}</span>
                </span>
              </a>
            </div>
            <a
              href={whatsappLink(siteConfig.whatsappMessages.battery)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-highlight hover:underline"
            >
              Looking for a used inverter battery? <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
