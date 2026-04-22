"use client";

import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParallaxCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export function ParallaxCard({ children, className, glowColor = "rgba(0,255,156,0.15)" }: ParallaxCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || typeof window === "undefined" || window.innerWidth < 768) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Very subtle rotation
    const rotateX = (mouseY / rect.height) * -4;
    const rotateY = (mouseX / rect.width) * 4;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={cardRef}
      className={cn("transition-shadow duration-200", className)}
      style={{
        perspective: "1000px",
      }}
      animate={{
        rotateX: rotation.x,
        rotateY: rotation.y,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={cn(
          "relative transition-all duration-200 h-full",
          isHovered ? "shadow-2xl" : "shadow-lg"
        )}
        style={{
          boxShadow: isHovered
            ? `0 0 30px ${glowColor}, 0 10px 40px rgba(0,0,0,0.3)`
            : "0 4px 20px rgba(0,0,0,0.2)",
          borderColor: isHovered ? "rgba(0,255,156,0.3)" : undefined,
        }}
      >
        {/* Subtle edge glow on hover */}
        <div
          className={cn(
            "absolute inset-0 pointer-events-none rounded-none transition-opacity duration-300 opacity-0",
            isHovered && "opacity-100"
          )}
          style={{
            background: `linear-gradient(135deg, ${glowColor} 0%, transparent 50%, ${glowColor} 100%)`,
            filter: "blur(1px)",
          }}
        />
        {children}
      </div>
    </motion.div>
  );
}
