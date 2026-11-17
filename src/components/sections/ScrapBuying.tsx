import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { scrapCategories } from "@/data/scrap";
import { scrapEnquiryLink } from "@/lib/whatsapp";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ButtonLink from "@/components/ui/Button";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import ScrapCard from "./ScrapCard";

export default function ScrapBuying() {
  return (
    <section id="scrap" aria-labelledby="scrap-heading" className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-8xl px-4 sm:px-6">
        <SectionHeading
          id="scrap-heading"
          eyebrow="Scrap Buying"
          title="We Buy All Types of Old Scrap Materials"
          description="From household scrap to industrial lots — tell us what you have and we will give you the best price. Tap any category to enquire instantly on WhatsApp."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {scrapCategories.map((category, i) => (
            <Reveal key={category.id} delay={(i % 3) * 100} className="h-full">
              <ScrapCard category={category} />
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal className="relative mt-16 overflow-hidden rounded-3xl bg-accent px-6 py-10 text-white shadow-2xl shadow-accent/30 sm:px-12 sm:py-12">
          <div className="absolute inset-y-0 right-0 hidden w-40 hazard-stripe opacity-25 [clip-path:polygon(40%_0,100%_0,100%_100%,0_100%)] md:block" aria-hidden="true" />
          <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h3 className="font-display text-3xl font-extrabold uppercase leading-tight sm:text-4xl">
                Have Old Scrap Materials? Contact Us for the Best Price!
              </h3>
              <p className="mt-3 text-white/90">
                Send us a photo and approximate quantity on WhatsApp — we will reply with a price quote.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:mr-16 lg:shrink-0">
              <ButtonLink href={scrapEnquiryLink()} external variant="dark" size="lg">
                <WhatsAppIcon className="h-5 w-5 text-whatsapp" /> WhatsApp Now
              </ButtonLink>
              <ButtonLink href={`tel:${siteConfig.contact.phoneDial}`} variant="outline-light" size="lg">
                <Phone className="h-5 w-5" aria-hidden="true" /> Call Us
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
