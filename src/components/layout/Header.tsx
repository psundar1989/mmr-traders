"use client";

import { useEffect, useState } from "react";
import { Clock, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { whatsappLink } from "@/lib/whatsapp";
import Logo from "@/components/ui/Logo";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link of the section currently in view.
  useEffect(() => {
    const sections = siteConfig.navLinks
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile menu is open; close on Escape.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const { contact, hours } = siteConfig;

  return (
    <>
      {/* Top info bar (desktop) */}
      <div className="hidden bg-black text-xs text-zinc-300 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <div className="flex items-center gap-6">
            <a href={`tel:${contact.phoneDial}`} className="flex items-center gap-1.5 transition hover:text-highlight">
              <Phone className="h-3.5 w-3.5 text-accent" aria-hidden="true" /> {contact.phoneDisplay}
            </a>
            <a href={`mailto:${contact.email}`} className="flex items-center gap-1.5 transition hover:text-highlight">
              <Mail className="h-3.5 w-3.5 text-accent" aria-hidden="true" /> {contact.email}
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden="true" /> Kottivakkam, Chennai
            </span>
          </div>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-accent" aria-hidden="true" /> {hours[0].label}: {hours[0].value}
          </span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-primary/95 shadow-xl shadow-black/20 backdrop-blur-md"
            : "border-transparent bg-primary"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20">
          <a href="#home" aria-label={`${siteConfig.name} — home`} onClick={() => setOpen(false)}>
            <Logo />
          </a>

          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={active === link.href ? "true" : undefined}
                    className={`relative rounded px-3 py-2 text-[0.95rem] font-semibold tracking-wide transition-colors after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-accent after:transition-transform after:duration-300 ${
                      active === link.href
                        ? "text-white after:scale-x-100"
                        : "text-zinc-300 after:scale-x-0 hover:text-white hover:after:scale-x-100"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-md bg-whatsapp px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-whatsapp/30 transition hover:-translate-y-0.5 hover:bg-whatsapp-dark sm:inline-flex"
            >
              <WhatsAppIcon className="h-5 w-5" /> WhatsApp Us
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center rounded-md text-white transition hover:bg-white/10 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`absolute inset-x-0 top-full overflow-y-auto border-t border-white/10 bg-primary shadow-2xl shadow-black/40 transition-[max-height,opacity] duration-300 lg:hidden ${
            open ? "max-h-[calc(100vh-4rem)] opacity-100" : "pointer-events-none max-h-0 opacity-0"
          }`}
        >
          <nav aria-label="Mobile navigation" className="px-4 pb-6 pt-2">
            <ul className="divide-y divide-white/5">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    tabIndex={open ? 0 : -1}
                    className={`block py-3.5 font-display text-xl font-semibold uppercase tracking-wider transition ${
                      active === link.href ? "text-accent" : "text-zinc-200 hover:text-accent"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={open ? 0 : -1}
                className="flex items-center justify-center gap-2 rounded-md bg-whatsapp py-3 font-bold text-white"
              >
                <WhatsAppIcon /> WhatsApp Us
              </a>
              <a
                href={`tel:${contact.phoneDial}`}
                tabIndex={open ? 0 : -1}
                className="flex items-center justify-center gap-2 rounded-md bg-accent py-3 font-bold text-white"
              >
                <Phone className="h-5 w-5" aria-hidden="true" /> Call {contact.phoneDisplay}
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
