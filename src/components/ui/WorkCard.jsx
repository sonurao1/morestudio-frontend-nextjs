'use client';

import { useRef, useState } from "react";
import { Play } from "lucide-react";

export default function WorkCard({
  title,
  category,
  tone,
  icon: Icon,
  videoLink,
}) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = async () => {
    if (!videoRef.current) return;

    try {
      await videoRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("Video play failed:", error);
    }
  };

  const handleToggle = async () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      try {
        await videoRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error(error);
      }
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="group cursor-pointer">
      <div
        className={`relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br ${tone}`}
      >
        {/* Video */}
        <video
          ref={videoRef}
          src={videoLink || "/videos/corporateVideo.mp4"}
          muted
          loop
          playsInline
          preload="metadata"
          onClick={handleToggle}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/35 pointer-events-none" />

        {/* Category Chip */}
        <div className="absolute left-4 top-4 z-20 flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1.5 backdrop-blur-sm">
          <Icon className="h-3 w-3 text-white/70" strokeWidth={1.75} />
          <span className="text-[11px] font-semibold uppercase tracking-wide text-white/70">
            {category}
          </span>
        </div>

        {/* Play Button */}
        {!isPlaying && (
          <button
            onClick={handlePlay}
            className="absolute inset-0 z-20 flex items-center justify-center"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/30">
              <Play
                className="ml-1 h-6 w-6 fill-white text-white"
                strokeWidth={0}
              />
            </span>
          </button>
        )}
      </div>

      <p className="mt-3.5 font-display text-[16px] font-bold text-ink">
        {title}
      </p>

      <p className="text-xs text-ink-muted">{category}</p>
    </div>
  );
}