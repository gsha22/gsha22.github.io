"use client";

import type { VideoHTMLAttributes } from "react";

type VideoProps = VideoHTMLAttributes<HTMLVideoElement> & {
  src: string;
};

export default function Video({ src, className, controls = true, preload = "metadata", ...rest }: VideoProps) {
  const normalizedSrc = src.startsWith("/") ? src : `/videos/${src}`;

  return (
    <video
      className={`w-full rounded-lg bg-black/5 dark:bg-white/5 ${className ?? ""}`.trim()}
      controls={controls}
      preload={preload}
      playsInline
      src={normalizedSrc}
      {...rest}
    />
  );
}
