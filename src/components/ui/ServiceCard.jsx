import { ArrowRight } from "lucide-react";

export default function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div className="group rounded-2xl border border-line p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/5">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-light">
        <Icon className="h-5 w-5 text-brand" strokeWidth={1.75} />
      </span>
      <h3 className="mt-5 font-display text-[17px] font-bold text-ink">
        {title}
      </h3>
      <p className="mt-2 text-[14.5px] leading-relaxed text-ink-muted">
        {description}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand transition-transform duration-200 group-hover:translate-x-0.5">
        Learn more
        <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
      </span>
    </div>
  );
}
