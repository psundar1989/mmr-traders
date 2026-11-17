/**
 * ============================================================
 *  THEME COLOURS
 * ============================================================
 *  Change any value here and the whole website updates.
 *  These are injected as CSS variables in `src/app/layout.tsx`
 *  and mapped to Tailwind colour utilities in `globals.css`
 *  (e.g. `bg-primary`, `text-accent`, `border-line`).
 *
 *  Use any valid CSS colour (hex, rgb, hsl, oklch).
 * ============================================================
 */

export const themeColors = {
  /** Dark charcoal — header, footer, dark sections. */
  primary: "#18181b",
  /** Slightly lighter charcoal — cards on dark backgrounds. */
  primarySoft: "#27272a",
  /** Main accent — buttons, highlights (orange). */
  accent: "#f97316",
  /** Accent hover / pressed state. */
  accentDark: "#ea580c",
  /** Secondary accent — badges, gradients (yellow). */
  highlight: "#facc15",
  /** Page background. */
  background: "#ffffff",
  /** Alternate section background (light gray). */
  surface: "#f4f4f5",
  /** Headings. */
  heading: "#18181b",
  /** Body text (dark gray). */
  text: "#3f3f46",
  /** Muted / secondary text. */
  muted: "#71717a",
  /** Borders and dividers. */
  line: "#e4e4e7",
  /** WhatsApp brand green. */
  whatsapp: "#25d366",
  whatsappDark: "#1da851",
} as const;

export type ThemeColorKey = keyof typeof themeColors;

/** Converts camelCase keys to `--color-kebab-case` CSS variables. */
export function themeCssVariables(): string {
  const vars = Object.entries(themeColors)
    .map(([key, value]) => {
      const kebab = key.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
      return `--brand-${kebab}:${value};`;
    })
    .join("");
  return `:root{${vars}}`;
}
