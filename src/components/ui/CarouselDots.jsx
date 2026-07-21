export default function CarouselDots({ count, active, onSelect, className = "" }) {
  return (
    <div className={`flex justify-center gap-1 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Go to slide ${i + 1}`}
          onClick={() => onSelect(i)}
          className="flex h-8 w-8 items-center justify-center"
        >
          <span
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-6 bg-brand" : "w-1.5 bg-line hover:bg-ink-muted/40"
            }`}
          />
        </button>
      ))}
    </div>
  );
}
