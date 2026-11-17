import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "accent" | "dark" | "outline" | "outline-light" | "whatsapp";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  accent: "bg-accent text-white hover:bg-accent-dark shadow-lg shadow-accent/25",
  dark: "bg-primary text-white hover:bg-primary-soft",
  outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  "outline-light": "border-2 border-white/70 text-white hover:bg-white hover:text-primary",
  whatsapp: "bg-whatsapp text-white hover:bg-whatsapp-dark shadow-lg shadow-whatsapp/25",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm sm:text-base",
  lg: "px-7 py-4 text-base sm:text-lg",
};

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  /** Opens in a new tab with safe rel attributes. */
  external?: boolean;
};

export const buttonClasses = (variant: Variant = "accent", size: Size = "md") =>
  `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${variants[variant]} ${sizes[size]}`;

/** Anchor styled as a button. Used for in-page links and WhatsApp links. */
export default function ButtonLink({
  href,
  variant = "accent",
  size = "md",
  external,
  className = "",
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={`${buttonClasses(variant, size)} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}
