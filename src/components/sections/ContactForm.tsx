"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

const enquiryTypes = [
  "Sell old scrap materials",
  "Buy a used inverter battery",
  "General enquiry",
] as const;

type FormState = {
  name: string;
  phone: string;
  type: (typeof enquiryTypes)[number];
  location: string;
  message: string;
};

const initial: FormState = { name: "", phone: "", type: enquiryTypes[0], location: "", message: "" };

const inputClass =
  "mt-1.5 w-full rounded-lg border border-line bg-surface px-4 py-3 text-heading placeholder:text-zinc-400 transition focus:border-accent focus:bg-white focus:outline-none focus:ring-4 focus:ring-accent/15";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const next: typeof errors = {};
    if (form.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[+\d][\d\s-]{7,15}$/.test(form.phone.trim())) next.phone = "Please enter a valid phone number.";
    if (form.message.trim().length < 5) next.message = "Please add a short message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    const text = [
      "Hello MMR Traders,",
      "",
      `Enquiry: ${form.type}`,
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      form.location.trim() ? `Location: ${form.location.trim()}` : null,
      "",
      form.message.trim(),
    ]
      .filter((l) => l !== null)
      .join("\n");
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    setSent(true);
    setForm(initial);
  };

  return (
    <form onSubmit={onSubmit} noValidate className="mt-6 grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="cf-name" className="text-sm font-semibold text-heading">
          Your Name <span className="text-accent">*</span>
        </label>
        <input
          id="cf-name"
          name="name"
          autoComplete="name"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          className={inputClass}
          placeholder="Enter your name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "cf-name-err" : undefined}
        />
        {errors.name && <p id="cf-name-err" className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="cf-phone" className="text-sm font-semibold text-heading">
          Phone Number <span className="text-accent">*</span>
        </label>
        <input
          id="cf-phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
          className={inputClass}
          placeholder="+91 98765 43210"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "cf-phone-err" : undefined}
        />
        {errors.phone && <p id="cf-phone-err" className="mt-1 text-sm text-red-600">{errors.phone}</p>}
      </div>
      <div>
        <label htmlFor="cf-type" className="text-sm font-semibold text-heading">Enquiry Type</label>
        <select
          id="cf-type"
          name="type"
          value={form.type}
          onChange={(e) => update("type", e.target.value as FormState["type"])}
          className={inputClass}
        >
          {enquiryTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="cf-location" className="text-sm font-semibold text-heading">Your Area / Location</label>
        <input
          id="cf-location"
          name="location"
          autoComplete="address-level2"
          value={form.location}
          onChange={(e) => update("location", e.target.value)}
          className={inputClass}
          placeholder="e.g. Thiruvanmiyur"
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="cf-message" className="text-sm font-semibold text-heading">
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={4}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className={`${inputClass} resize-y`}
          placeholder="Type of scrap & approx. quantity, or the battery capacity you need"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "cf-message-err" : undefined}
        />
        {errors.message && <p id="cf-message-err" className="mt-1 text-sm text-red-600">{errors.message}</p>}
      </div>
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-7 py-3.5 font-semibold text-white shadow-lg shadow-accent/25 transition hover:-translate-y-0.5 hover:bg-accent-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <Send className="h-5 w-5" aria-hidden="true" /> Send via WhatsApp
        </button>
        <p role="status" className="text-sm text-muted">
          {sent ? "WhatsApp opened in a new tab — tap send to deliver your message." : "No data is stored on this website."}
        </p>
      </div>
    </form>
  );
}
