import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <Reveal>
        <div
          className={`flex items-center gap-4 mb-6 ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          <span className="label-eyebrow">{index}</span>
          <span className="h-px w-10 bg-border-hover" />
          <span className="label-eyebrow">{eyebrow}</span>
        </div>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="text-display font-bold tracking-tight text-white text-balance">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.12}>
          <p
            className={`mt-6 text-text-muted text-base md:text-lg max-w-md leading-relaxed ${
              align === "center" ? "mx-auto" : ""
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
