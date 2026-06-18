"use client";

import Image from "next/image";
import { useState } from "react";

type PlaceholderImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  /** Tailwind classes for the fallback box (e.g. aspect ratio) */
  fallbackClassName?: string;
};

/**
 * Renders the real image via next/image once the file exists in /public.
 * Until then, shows a butter-tinted placeholder labelled with the
 * expected filename — drop the PNG in and it appears automatically.
 */
export default function PlaceholderImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
  fallbackClassName = "",
}: PlaceholderImageProps) {
  const [missing, setMissing] = useState(false);

  if (missing) {
    return (
      <div
        role="img"
        aria-label={alt}
        style={{ aspectRatio: `${width} / ${height}` }}
        className={`flex w-full flex-col items-center justify-center gap-3 rounded-3xl border-2 border-dashed border-butter-dark/50 bg-butter/25 p-6 text-center ${fallbackClassName}`}
      >
        <svg
          className="h-10 w-10 text-butter-dark"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 19.5h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Z"
          />
        </svg>
        <p className="font-heading text-xs font-medium text-charcoal/60">
          Image coming soon
        </p>
        <code className="rounded-full bg-white/70 px-3 py-1 text-[11px] text-charcoal/50">
          {src}
        </code>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      className={className}
      onError={() => setMissing(true)}
    />
  );
}
