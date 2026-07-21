export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "light",
  className = "",
}) {
  const alignClasses = align === "center" ? "text-center items-center" : "text-left items-start";
  const eyebrowColor = tone === "dark" ? "text-brand-light/90" : "text-brand";
  const titleColor = tone === "dark" ? "text-white" : "text-ink";
  const subtitleColor = tone === "dark" ? "text-white/60" : "text-ink-muted";

  return (
    <div className={`flex flex-col ${alignClasses} ${className}`}>
      {eyebrow && (
        <span
          className={`eyebrow mb-3 text-xs font-bold uppercase ${eyebrowColor}`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-[35px] font-extrabold leading-[1.15] tracking-tight ${titleColor} sm:text-[41px]`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 max-w-2xl text-[16px] leading-relaxed ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
