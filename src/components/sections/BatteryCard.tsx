import { Gauge, Zap } from "lucide-react";
import type { Battery, BatteryCondition } from "@/data/batteries";
import { batteryEnquiryLink } from "@/lib/whatsapp";
import SafeImage from "@/components/ui/SafeImage";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

const conditionStyles: Record<BatteryCondition, string> = {
  Excellent: "bg-emerald-100 text-emerald-800",
  "Very Good": "bg-lime-100 text-lime-800",
  Good: "bg-amber-100 text-amber-800",
  Fair: "bg-zinc-200 text-zinc-700",
};

export default function BatteryCard({ battery }: { battery: Battery }) {
  const title = `${battery.brand} ${battery.model} (${battery.capacityAh}Ah)`;
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-primary-soft transition duration-300 hover:-translate-y-1.5 hover:border-accent/60 hover:shadow-2xl hover:shadow-black/40">
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-800">
        <SafeImage
          src={battery.image}
          alt={`${battery.brand} ${battery.capacityAh}Ah — ${battery.imageAlt}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-md bg-black/75 px-2.5 py-1 font-display text-lg font-bold text-highlight backdrop-blur">
          {battery.capacityAh}Ah
        </span>
        <span className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-xs font-bold ${conditionStyles[battery.condition]}`}>
          {battery.condition}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">{battery.brand}</p>
        <h3 className="mt-1 font-display text-xl font-bold leading-tight text-white">{battery.model}</h3>

        <dl className="mt-4 grid grid-cols-2 gap-2 text-sm">
          <div className="rounded-lg bg-black/25 px-3 py-2">
            <dt className="flex items-center gap-1 text-xs text-zinc-400">
              <Zap className="h-3.5 w-3.5" aria-hidden="true" /> Capacity
            </dt>
            <dd className="font-semibold text-white">
              {battery.capacityAh}Ah · {battery.voltage}
            </dd>
          </div>
          <div className="rounded-lg bg-black/25 px-3 py-2">
            <dt className="flex items-center gap-1 text-xs text-zinc-400">
              <Gauge className="h-3.5 w-3.5" aria-hidden="true" /> Type
            </dt>
            <dd className="font-semibold text-white">{battery.type}</dd>
          </div>
          <div className="col-span-2 rounded-lg bg-black/25 px-3 py-2">
            <dt className="text-xs text-zinc-400">Condition</dt>
            <dd className="font-semibold text-white">
              {battery.condition} <span className="font-normal text-zinc-400">— {battery.conditionNote}</span>
            </dd>
          </div>
        </dl>

        <div className="mt-auto pt-5">
          <a
            href={batteryEnquiryLink(title)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enquire on WhatsApp about ${title}`}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-whatsapp px-4 py-3 font-semibold text-white transition hover:bg-whatsapp-dark"
          >
            <WhatsAppIcon /> WhatsApp Enquiry
          </a>
        </div>
      </div>
    </article>
  );
}
