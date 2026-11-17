import type { ScrapCategory } from "@/data/scrap";
import { scrapEnquiryLink } from "@/lib/whatsapp";
import SafeImage from "@/components/ui/SafeImage";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

export default function ScrapCard({ category }: { category: ScrapCategory }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/10">
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-200">
        <SafeImage
          src={category.image}
          alt={category.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" aria-hidden="true" />
        <h3 className="absolute bottom-4 left-5 right-5 font-display text-2xl font-bold uppercase tracking-wide text-white">
          {category.name}
        </h3>
        <span className="absolute right-4 top-4 rounded bg-highlight px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
          We Buy
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="leading-relaxed text-muted">{category.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${category.name} examples`}>
          {category.examples.map((ex) => (
            <li key={ex} className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-body">
              {ex}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-5">
        <a
          href={scrapEnquiryLink(category.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-md bg-whatsapp px-4 py-3 font-semibold text-white transition hover:bg-whatsapp-dark"
          aria-label={`Enquire on WhatsApp about selling ${category.name}`}
        >
          <WhatsAppIcon /> WhatsApp Enquiry
        </a>
        </div>
      </div>
    </article>
  );
}
