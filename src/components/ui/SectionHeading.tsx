import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
  id?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  id,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center items-center" : "text-left items-start";
  return (
    <Reveal className={`flex max-w-3xl flex-col ${alignment}`}>
      <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        <span className="h-0.5 w-8 bg-accent" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2
        id={id}
        className={`mt-3 font-display text-3xl font-bold uppercase leading-tight tracking-wide sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-heading"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${dark ? "text-zinc-300" : "text-muted"}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
