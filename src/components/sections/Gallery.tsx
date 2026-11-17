"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { galleryCategories, galleryImages, type GalleryCategory } from "@/data/gallery";
import SectionHeading from "@/components/ui/SectionHeading";
import SafeImage from "@/components/ui/SafeImage";

const tabs: ("All" | GalleryCategory)[] = ["All", ...galleryCategories];

/** Bento layout on large screens for the full gallery: every block of 12 images fills a 4×4 grid. */
const featureSpan = (i: number) => {
  const n = i % 12;
  return n === 0 || n === 5 ? "lg:row-span-2" : n === 1 || n === 7 ? "lg:col-span-2" : "";
};

export default function Gallery() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("All");
  const [index, setIndex] = useState<number | null>(null);

  const images = tab === "All" ? galleryImages : galleryImages.filter((g) => g.category === tab);
  const current = index !== null ? images[index] : null;

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, step]);

  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-8xl px-4 sm:px-6">
        <SectionHeading
          id="gallery-heading"
          eyebrow="Gallery"
          title="Our Scrap & Battery Collections"
          description="A look at the kinds of scrap materials we buy and the used inverter batteries we sell."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter gallery">
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => {
                setTab(t);
                setIndex(null);
              }}
              aria-pressed={tab === t}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                tab === t ? "bg-primary text-white" : "bg-white text-body shadow-sm hover:bg-accent hover:text-white"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <ul className="mt-10 grid grid-flow-dense auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:gap-4 md:grid-cols-3 lg:auto-rows-[220px] lg:grid-cols-4">
          {images.map((img, i) => (
            <li
              key={img.src}
              className={`animate-fade-up ${tab === "All" ? featureSpan(i) : ""}`}
            >
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="group relative block h-full w-full overflow-hidden rounded-xl bg-zinc-300 focus-visible:outline-3 focus-visible:outline-accent"
                aria-label={`View larger image: ${img.caption}`}
              >
                <SafeImage
                  src={img.thumb}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/0 to-black/0 opacity-80 transition group-hover:opacity-100" />
                <span className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 text-left">
                  <span className="text-sm font-semibold text-white sm:text-base">{img.caption}</span>
                  <Expand className="h-4 w-4 shrink-0 text-highlight opacity-0 transition group-hover:opacity-100" aria-hidden="true" />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Lightbox */}
      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            autoFocus
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-accent"
            aria-label="Close image"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="absolute left-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-accent sm:left-6"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <figure className="relative h-[75vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <SafeImage key={current.src} src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" />
            <figcaption className="absolute -bottom-10 left-0 right-0 text-center text-zinc-200">
              {current.caption} <span className="text-zinc-500">· {(index ?? 0) + 1} / {images.length}</span>
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="absolute right-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-accent sm:right-6"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
}
