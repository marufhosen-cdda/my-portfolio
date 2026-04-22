"use client";

import { personalInfo } from "@/data/resume";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { MagneticButton } from "./MagneticButton";

function GithubIcon({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>;
}

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
  };

  return (
    <section id="hero" className="relative py-16 md:py-20 min-h-[95vh] flex items-center">
      <div className="absolute inset-0 bg-linear-to-b from-background via-background to-card/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,156,0.03)_0%,transparent_70%)]" />

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.div variants={itemVariants} className="mb-4">
          <div className="w-32 h-32 mx-auto rounded-full border border-accent/30 bg-card/50 flex items-center justify-center neon-glow overflow-hidden">
            <Image src={personalInfo.image} alt="Profile" width={96} height={96} className="rounded-full object-cover" priority />
          </div>
        </motion.div>

        <motion.span variants={itemVariants} className="inline-block px-3 py-0.5 mb-3 text-[10px] tracking-[0.25em] uppercase text-accent border border-accent/30 bg-accent/5 neon-text-glow">
          Software Engineer
        </motion.span>

        <motion.h1 variants={itemVariants} className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-3">
          {personalInfo.name}
        </motion.h1>

        <motion.p variants={itemVariants} className="text-sm text-muted-foreground max-w-xl mx-auto mb-6 leading-relaxed">
          Dynamic and detail-oriented Software Engineer with a proven ability to create user-friendly, effective solutions. Skilled in modern JavaScript ecosystems and focused on building scalable, high-performance applications. Committed to continuous learning and delivering high-quality software.</motion.p>
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-6">
          <MagneticButton>
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 px-5 py-2 text-xs bg-accent text-accent-foreground hover:bg-accent/90 transition-all hover:shadow-[0_0_15px_rgba(0,255,156,0.3)] rounded-none">
              <Mail size={14} />
              <span>Get in Touch</span>
            </a>
          </MagneticButton>
          <MagneticButton>
            <a href={personalInfo.github[0]} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2 text-xs border border-accent/30 text-accent hover:bg-accent/10 hover:border-accent/50 transition-all hover:shadow-[0_0_12px_rgba(0,255,156,0.15)] rounded-none">
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </MagneticButton>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
          <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-1.5 hover:text-accent transition-colors">
            <Phone size={12} />
            <span>{personalInfo.phone}</span>
          </a>
          <span className="text-border">|</span>
          <span className="flex items-center gap-1.5">
            <MapPin size={12} />
            <span>{personalInfo.location}</span>
          </span>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8 flex justify-center">
          <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }); }} className="flex flex-col items-center gap-1 text-[10px] text-muted-foreground hover:text-accent transition-colors cursor-pointer">
            <span className="tracking-widest uppercase">Scroll</span>
            <svg width="12" height="18" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent/40">
              <rect x="1" y="1" width="14" height="22" rx="7" />
              <line x1="8" y1="6" x2="8" y2="10" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}