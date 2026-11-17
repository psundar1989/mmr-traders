import { BatteryCharging, Handshake, IndianRupee, Recycle, type LucideIcon } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const highlights: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Recycle,
    title: "Scrap Materials Buying",
    text: "Metals, newspapers, glass bottles, plastic, old batteries and more — big or small quantities.",
  },
  {
    icon: BatteryCharging,
    title: "Old Battery Trading",
    text: "Quality used inverter batteries of popular brands and capacities, tested before sale.",
  },
  {
    icon: IndianRupee,
    title: "Competitive Prices",
    text: "Fair rates based on current market prices with accurate weighing every time.",
  },
  {
    icon: Handshake,
    title: "Trusted Customer Service",
    text: "Honest dealing, quick response on WhatsApp and friendly local service.",
  },
];

export default function Highlights() {
  return (
    <section aria-label="Business highlights" className="relative z-10 bg-surface pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="-mt-px grid gap-4 pt-12 sm:grid-cols-2 lg:-mt-16 lg:grid-cols-4 lg:pt-0">
          {highlights.map(({ icon: Icon, title, text }, i) => (
            <Reveal
              key={title}
              delay={i * 100}
              className="group relative overflow-hidden rounded-xl border border-line bg-white p-6 shadow-lg shadow-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
              <span className="grid h-14 w-14 place-items-center rounded-lg bg-primary text-highlight transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-wide text-heading">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
