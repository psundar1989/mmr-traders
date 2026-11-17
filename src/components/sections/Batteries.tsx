"use client";

import { useState } from "react";
import { Info } from "lucide-react";
import { batteries, capacityFilters } from "@/data/batteries";
import { batteryEnquiryLink } from "@/lib/whatsapp";
import SectionHeading from "@/components/ui/SectionHeading";
import ButtonLink from "@/components/ui/Button";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import BatteryCard from "./BatteryCard";

export default function Batteries() {
  const [filter, setFilter] = useState(0);
  const visible = batteries.filter(capacityFilters[filter].test);

  return (
    <section id="batteries" aria-labelledby="batteries-heading" className="relative overflow-hidden bg-primary py-20 sm:py-24">
      <div className="grid-pattern absolute inset-0" aria-hidden="true" />
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          id="batteries-heading"
          eyebrow="Used Inverter Batteries"
          title="Quality Used Inverter Batteries at Affordable Prices"
          description="Second-hand inverter batteries from popular brands in different capacities — checked and tested before sale. Get reliable power backup without paying new-battery prices."
          dark
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter batteries by capacity">
          {capacityFilters.map((f, i) => (
            <button
              key={f.label}
              type="button"
              onClick={() => setFilter(i)}
              aria-pressed={filter === i}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                filter === i
                  ? "border-accent bg-accent text-white"
                  : "border-white/15 text-zinc-300 hover:border-accent hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((battery) => (
            <div key={battery.id} className="animate-fade-up">
              <BatteryCard battery={battery} />
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-center sm:p-8 lg:flex-row lg:text-left">
          <Info className="h-8 w-8 shrink-0 text-highlight" aria-hidden="true" />
          <p className="flex-1 text-sm leading-relaxed text-zinc-300 sm:text-base">
            Stock changes regularly. Message us on WhatsApp for the latest available models and capacities.
          </p>
          <ButtonLink href={batteryEnquiryLink()} external variant="whatsapp" className="shrink-0">
            <WhatsAppIcon /> Check Availability
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
