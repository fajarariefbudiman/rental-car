interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export const SectionHeading = ({ eyebrow, title, description, align = "center" }: Props) => (
  <div className={align === "center" ? "text-center" : "text-left"}>
    {eyebrow && (
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
    )}
    <h2 className="mt-2 font-display text-3xl md:text-4xl lg:text-5xl font-black text-ink tracking-tight">
      {title}
    </h2>
    {description && (
      <p className={`mt-4 text-muted-foreground ${align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"}`}>
        {description}
      </p>
    )}
  </div>
);
