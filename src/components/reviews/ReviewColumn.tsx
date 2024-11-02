"use client";

import { useEffect, useRef, useState } from "react";

import Review from "./Review";

import { cn } from "@/lib/utils";

const ReviewColumn = ({
  reviews,
  className,
  reviewClassName,
  msPerPixel = 0 // milliseconds per pixel in animation
}: {
  reviews: string[];
  className?: string;
  // eslint-disable-next-line no-unused-vars
  reviewClassName?: (reviewIndex: number) => string;
  msPerPixel?: number;
}) => {
  const columnRef = useRef<HTMLDivElement | null>(null);
  const [columnHeight, setColumnHeight] = useState(0);

  const duration = `${columnHeight * msPerPixel}ms`;

  useEffect(() => {
    if (!columnRef.current) return;

    const resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0);
    });

    resizeObserver.observe(columnRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div
      ref={columnRef}
      className={cn("animate-marquee space-y-8 py-4 ", className)}
      style={{ "--marquee-duration": duration } as React.CSSProperties}
    >
      {reviews.concat(reviews).map((imgSrc, reviewIndex) => (
        <Review
          key={reviewIndex}
          className={reviewClassName?.(reviewIndex % reviews.length)}
          imgSrc={imgSrc}
        />
      ))}
    </div>
  );
};

export default ReviewColumn;
