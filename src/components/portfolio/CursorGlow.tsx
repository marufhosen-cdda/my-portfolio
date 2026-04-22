"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      // Lerp for smooth follow
      const lerpFactor = 0.08;
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * lerpFactor;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * lerpFactor;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${currentPos.current.x - 200}px, ${currentPos.current.y - 200}px)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
      rafId.current = requestAnimationFrame(animate);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 w-[400px] h-[400px] pointer-events-none z-[1] opacity-0 md:opacity-100"
      style={{
        background: "radial-gradient(circle, rgba(0,255,156,0.08) 0%, rgba(0,255,156,0.02) 40%, transparent 70%)",
        mixBlendMode: "screen",
        filter: "blur(40px)",
      }}
    />
  );
}
