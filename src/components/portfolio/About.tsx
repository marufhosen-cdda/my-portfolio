"use client";

import { motion, type Variants } from "framer-motion";
import { summary } from "@/data/resume";

interface AboutProps {
  className?: string;
}

export function About({ className }: AboutProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section id="about" className={`py-12 px-6 ${className || ""}`}>
      <div className="max-w-3xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
          <motion.span variants={itemVariants} className="inline-block text-xs tracking-[0.2em] uppercase text-accent mb-3 neon-text-glow">
            About Me
          </motion.span>

          <motion.h2 variants={itemVariants} className="font-serif text-3xl md:text-4xl font-medium mb-5">
            Crafting Digital Experiences
          </motion.h2>

          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{summary}</p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <motion.div variants={itemVariants} className="p-5 border border-border/60 bg-card/40 rounded-none neon-glow hover:neon-border-glow">
                <h3 className="font-serif text-base mb-2 text-accent neon-text-glow">Frontend Focus</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Specializing in building responsive, accessible, and performant user interfaces with React and Next.js.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="p-5 border border-border/60 bg-card/40 rounded-none neon-glow hover:neon-border-glow">
                <h3 className="font-serif text-base mb-2 text-accent neon-text-glow">Full Stack Ready</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Experienced in building complete applications with Node.js, PostgreSQL, and cloud infrastructure.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}