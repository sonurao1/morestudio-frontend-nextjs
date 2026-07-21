import { ArrowRight } from "lucide-react";

const VARIANT_CLASSES = {
  primary:
    "bg-brand text-white hover:bg-brand-dark border border-brand",
  outline:
    "bg-transparent text-white border border-white/35 hover:border-white/70 hover:bg-white/5",
  "outline-dark":
    "bg-transparent text-ink border border-line hover:border-ink/40",
};

const SIZE_CLASSES = {
  sm: "px-4 py-2 text-sm gap-2",
  md: "px-5 py-3 text-sm gap-2.5",
  lg: "px-6 py-3.5 text-[16px] gap-3",
};

const ICON_WRAP_CLASSES = {
  primary: "bg-white/20",
  outline: "bg-white/10",
  "outline-dark": "bg-ink/8",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  icon = false,
  className = "",
  ...props
}) {
  const classes = `inline-flex items-center justify-center rounded-lg font-semibold whitespace-nowrap transition-colors duration-200 ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`;

  const content = (
    <>
      {children}
      {icon && (
        <span
          className={`inline-flex items-center justify-center rounded-full ${ICON_WRAP_CLASSES[variant]} p-1`}
        >
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.25} />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
