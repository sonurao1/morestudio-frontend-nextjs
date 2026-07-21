import { Quote } from "lucide-react";

export default function TestimonialCard({ quote, name, role, company }) {
  return (
    <div className="flex flex-col rounded-2xl border border-line bg-white p-7">
      <Quote className="h-7 w-7 text-brand/25" fill="currentColor" strokeWidth={0} />
      <p className="mt-4 flex-1 text-[15.5px] leading-relaxed text-ink-soft">
        {quote}
      </p>
      <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
        <div>
          <p className="text-[14.5px] font-bold text-ink">{name}</p>
          <p className="text-xs text-ink-muted">{role}</p>
        </div>
        <span className="text-xs font-semibold text-ink-muted/70">{company}</span>
      </div>
    </div>
  );
}
