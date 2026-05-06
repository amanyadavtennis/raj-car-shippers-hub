interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

const SectionHeading = ({ eyebrow, title, subtitle, align = "center" }: Props) => (
  <div className={`mb-10 ${align === "center" ? "mx-auto max-w-2xl text-center" : ""}`}>
    {eyebrow && (
      <span className="mb-3 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent">
        {eyebrow}
      </span>
    )}
    <h2 className="text-3xl font-extrabold text-primary md:text-4xl">{title}</h2>
    {subtitle && <p className="mt-3 text-base text-muted-foreground md:text-lg">{subtitle}</p>}
  </div>
);

export default SectionHeading;
