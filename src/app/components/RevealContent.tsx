"use client";

import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { animate, motion, useMotionTemplate, useMotionValue, useTransform } from "framer-motion";

interface RevealContentProps {
  children: ReactNode;
  /**
   * Pixels per second that the reveal line should travel. Higher = faster animation.
   */
  speed?: number;
  /**
   * Soft edge of the gradient expressed as a 0-1 fraction of the height (e.g. 0.12 = 12%).
   */
  softness?: number;
  /**
   * Starting progress (0-1). Kept low so the top of the content is never fully hidden.
   */
  startProgress?: number;
  className?: string;
}

// Mask-driven reveal that leaves layout untouched and only fades where the gradient passes.
export default function RevealContent({
  children,
  speed = 900,
  softness = 0.12,
  startProgress = 0.04,
  className,
}: RevealContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(0.8);
  const [canAnimate, setCanAnimate] = useState(false);

  // Single motion value that drives the gradient position (0 -> 1).
  const progress = useMotionValue(startProgress);

  // Clamp so the gradient never moves above the softness band, ensuring some content is visible initially.
  const clampedPercent = useTransform(progress, (value) => {
    const clamped = Math.min(Math.max(value, softness), 1);
    return `${(clamped * 100).toFixed(2)}%`;
  });

  const softnessPercent = useMemo(() => `${(softness * 100).toFixed(2)}%`, [softness]);

  // Construct a moving vertical opacity gradient via CSS mask.
  const maskGradient = useMotionTemplate`
    linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) calc(${clampedPercent} - ${softnessPercent}),
      rgba(0, 0, 0, 0.55) ${clampedPercent},
      rgba(0, 0, 0, 0) calc(${clampedPercent} + ${softnessPercent}),
      rgba(0, 0, 0, 0) 100%
    )
  `;

  // Wait until the full page is loaded (all assets ready) before animating.
  useEffect(() => {
    const ready = () => setCanAnimate(true);

    if (document.readyState === "complete") {
      ready();
      return;
    }

    window.addEventListener("load", ready, { once: true });
    return () => window.removeEventListener("load", ready);
  }, []);

  useEffect(() => {
    const node = containerRef.current;
    if (!node || !canAnimate) return;

    const height = node.scrollHeight || node.clientHeight || 1;
    const calculatedDuration = Math.max(height / speed, 0.35);

    setDuration(calculatedDuration);
    progress.set(startProgress);

    const controls = animate(progress, 1, {
      duration: calculatedDuration,
      ease: "linear",
    });

    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children, speed, startProgress, canAnimate]);

  return (
    <motion.div
      ref={containerRef}
      style={{
        maskImage: maskGradient,
        WebkitMaskImage: maskGradient,
        maskSize: "100% 100%",
        WebkitMaskSize: "100% 100%",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "0 0",
        WebkitMaskPosition: "0 0",
        willChange: "mask-image, -webkit-mask-image",
      }}
      transition={{ duration, ease: "linear" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
