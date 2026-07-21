export default function Stat({
  icon: Icon,
  value,
  label,
  sublabel,
  layout = "row",
  tone = "light",
}) {
  const valueColor = tone === "dark" ? "text-white" : "text-ink";
  const labelColor = tone === "dark" ? "text-white/55" : "text-ink-soft";
  const sublabelColor = tone === "dark" ? "text-white/35" : "text-ink-muted";

  if (layout === "column") {
    return (
      <div className="flex flex-col items-center text-center">
        <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-brand-light">
          <Icon className="h-5 w-5 text-brand" strokeWidth={1.75} />
        </span>
        <span className={`font-display text-3xl font-extrabold ${valueColor}`}>
          {value}
        </span>
        <span className={`mt-1 text-[16px] font-semibold ${labelColor}`}>{label}</span>
        {sublabel && (
          <span className={`mt-0.5 text-xs ${sublabelColor}`}>{sublabel}</span>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <Icon className={`h-5 w-5 shrink-0 ${tone === "dark" ? "text-brand" : "text-brand"}`} strokeWidth={1.75} />
      <div className="flex flex-col leading-tight">
        <span className={`font-display text-lg font-extrabold ${valueColor}`}>
          {value}
        </span>
        <span className={`text-xs ${labelColor}`}>{label}</span>
      </div>
    </div>
  );
}
