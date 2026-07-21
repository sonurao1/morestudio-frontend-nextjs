import { Play } from "lucide-react";

export default function WorkCard({
  title,
  category,
  tone,
  icon: Icon,
  videoLink,
}) {
  return (
    <div className="group cursor-pointer">
      <div
        className={`relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br ${tone}`}
      >
        {/* Video */}
        {/* <video
          src={videoLink}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        /> */}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/35 transition-colors duration-300 group-hover:bg-black/45" />

        {/* Category Chip */}
        <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1.5 backdrop-blur-sm">
          <Icon className="h-3 w-3 text-white/70" strokeWidth={1.75} />
          <span className="text-[11px] font-semibold uppercase tracking-wide text-white/70">
            {category}
          </span>
        </div>

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
            <Play
              className="ml-0.5 h-5 w-5 fill-white text-white"
              strokeWidth={0}
            />
          </span>
        </div>
      </div>

      <p className="mt-3.5 font-display text-[16px] font-bold text-ink">
        {title}
      </p>

      <p className="text-xs text-ink-muted">{category}</p>
    </div>
  );
}