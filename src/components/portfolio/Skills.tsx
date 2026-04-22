"use client";

import { motion, type Variants } from "framer-motion";
import { skillCategories } from "@/data/resume";
import { Card, CardContent } from "@/components/ui/card";
import { ParallaxCard } from "./ParallaxCard";

interface SkillsProps {
  className?: string;
}

export function Skills({ className }: SkillsProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <section id="skills" className={`py-12 px-6 ${className || ""}`}>
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4 }} className="mb-6">
          <span className="inline-block text-xs tracking-[0.2em] uppercase text-accent mb-2 neon-text-glow">Technical Expertise</span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium">Skills</h2>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid sm:grid-cols-2 gap-4">
          {skillCategories.map((category) => (
            <motion.div key={category.name} variants={itemVariants}>
              <ParallaxCard>
                <Card className="bg-card/60 border-border/60">
                  <CardContent className="p-5">
                    <h3 className="font-serif text-sm mb-3 text-accent uppercase tracking-wider neon-text-glow">{category.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span key={skill} className="px-2.5 py-1 text-xs border border-border/60 bg-accent/5 text-muted-foreground hover:border-accent/40 hover:text-accent transition-colors cursor-default">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ParallaxCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}