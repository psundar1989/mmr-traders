"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SafeImage from "@/components/ui/SafeImage";

export type HeroSlide = { src: string; alt: string };

const INTERVAL_MS = 6000;
const FADE_MS = 1200;

/**
 * Background image carousel for the hero banner. Renders behind the hero
 * content (-z-10) with a crossfade + slow zoom, pagination dots and arrows.
 * Only the first slide is preloaded; the rest mount after it has loaded so
 * they never compete with the LCP image.
 */
export default function HeroCarousel({ slides }: { slides: HeroSlide[] }) {
  const [active, setActive] = useState(0);
  const [restMounted, setRestMounted] = useState(false);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const count = slides.length;

  const go = useCallback((i: number) => setActive(((i % count) + count) % count), [count]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Autoplay. Re-created whenever the slide changes, so a manual click
  // restarts the full interval. Pauses while the tab is hidden.
  useEffect(() => {
    if (paused || reducedMotion || !restMounted || count < 2) return;
    const id = window.setTimeout(() => {
      if (!document.hidden) go(active + 1);
    }, INTERVAL_MS);
    return () => window.clearTimeout(id);
  }, [active, paused, reducedMotion, restMounted, count, go]);

  // Fallback in case the first image's load event fired before hydration.
  useEffect(() => {
    const id = window.setTimeout(() => setRestMounted(true), 2500);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <>
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {slides.map((slide, i) => {
          if (i !== 0 && !restMounted) return null;
          const isActive = i === active;
          return (
            <div
              key={slide.src}
              className="absolute inset-0 will-change-[opacity,transform]"
              style={{
                opacity: isActive ? 1 : 0,
                transform: isActive || reducedMotion ? "scale(1)" : "scale(1.08)",
                transition: isActive
                  ? `opacity ${FADE_MS}ms ease-in-out, transform ${INTERVAL_MS + FADE_MS}ms ease-out`
                  : // Fade out first, then reset the zoom while invisible.
                    `opacity ${FADE_MS}ms ease-in-out, transform 0ms linear ${FADE_MS}ms`,
              }}
            >
              <SafeImage
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="100vw"
                preload={i === 0}
                loading={i === 0 ? undefined : "lazy"}
                onLoad={i === 0 ? () => setRestMounted(true) : undefined}
                className="object-cover"
              />
            </div>
          );
        })}
      </div>

      {/* Balanced gradient overlay: darker where the text sits, lighter elsewhere so the photo shows through. */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/45 to-black/65 lg:bg-gradient-to-r lg:from-black/80 lg:via-black/50 lg:to-black/25"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary/90 via-transparent to-transparent" aria-hidden="true" />

      {count > 1 && (
        <div
          // lg: sit above the Highlights cards, which overlap the hero by 4rem (lg:-mt-16).
          className="absolute inset-x-0 bottom-4 z-10 flex items-center justify-center gap-3 sm:bottom-6 lg:bottom-22"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <button
            type="button"
            onClick={() => go(active - 1)}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-black/30 text-white/80 backdrop-blur-sm transition hover:border-accent hover:bg-accent hover:text-white"
            aria-label="Previous banner image"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="flex items-center gap-2" role="group" aria-label="Choose banner image">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => go(i)}
                aria-label={`Show banner image ${i + 1} of ${count}`}
                aria-current={i === active}
                className="group grid h-6 place-items-center"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-500 ${
                    i === active ? "w-7 bg-highlight" : "w-1.5 bg-white/50 group-hover:bg-white"
                  }`}
                />
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(active + 1)}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-black/30 text-white/80 backdrop-blur-sm transition hover:border-accent hover:bg-accent hover:text-white"
            aria-label="Next banner image"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      )}
    </>
  );
}
