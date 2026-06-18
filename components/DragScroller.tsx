"use client";

import { useRef, useState } from "react";

/**
 * Horizontal drag-to-scroll rail. Click-and-drag on desktop, native swipe on
 * touch. Children should be fixed/min-width items. Scroll-snaps gently.
 */
export default function DragScroller({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const start = useRef({ x: 0, scroll: 0, moved: false });

  const onPointerDown = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || e.pointerType === "touch") return;
    setDragging(true);
    start.current = { x: e.clientX, scroll: el.scrollLeft, moved: false };
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || !dragging) return;
    const dx = e.clientX - start.current.x;
    if (Math.abs(dx) > 4) start.current.moved = true;
    el.scrollLeft = start.current.scroll - dx;
  };

  const end = (e: React.PointerEvent) => {
    setDragging(false);
    const el = ref.current;
    if (el?.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
  };

  // prevent click navigation when the user was actually dragging
  const onClickCapture = (e: React.MouseEvent) => {
    if (start.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      start.current.moved = false;
    }
  };

  return (
    <div
      ref={ref}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={end}
      onPointerLeave={end}
      onClickCapture={onClickCapture}
      className={`no-scrollbar flex items-start snap-x snap-mandatory gap-6 overflow-x-auto px-1 pb-4 pt-16 ${
        dragging ? "cursor-grabbing select-none" : "lg:cursor-grab"
      } ${className}`}
      style={{ scrollbarWidth: "none" }}
      data-cursor="hover"
    >
      {children}
    </div>
  );
}
