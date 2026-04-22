"use client";

import { motion, type Variants } from "framer-motion";
import { experiences } from "@/data/resume";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import { ParallaxCard } from "./ParallaxCard";

interface ExperienceProps {
  className?: string;
}

export function Experience({ className }: ExperienceProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -15 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section id="experience" className={`py-12 px-6 bg-card/30 ${className || ""}`}>
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4 }} className="mb-8">
          <span className="inline-block text-xs tracking-[0.2em] uppercase text-accent mb-2 neon-text-glow">Career Path</span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium">Experience</h2>
        </motion.div>

        <div className="relative pl-6">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-accent/20" />

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="space-y-5">
            {experiences.map((exp) => (
              <motion.div key={exp.id} variants={itemVariants} className="relative pl-6">
                <div className="absolute left-[-25px] top-2 w-2 h-2 bg-accent/40 border border-accent/60 neon-glow" />

                <ParallaxCard>
                  <Card className="bg-card/60 border-border/60">
                    <CardContent className="p-5">
                      <div className="space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                          <div>
                            <h3 className="font-serif text-base font-medium text-accent">{exp.title}</h3>
                            <p className="text-sm text-muted-foreground">{exp.company}</p>
                          </div>
                          <span className="text-xs text-muted-foreground whitespace-nowrap">{exp.startDate} — {exp.endDate}</span>
                        </div>

                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1"><MapPin size={11} />{exp.location}</span>
                        </div>

                        <p className="text-sm text-muted-foreground">{exp.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {exp.responsibilities.slice(0, 3).map((resp, i) => (
                            <Badge key={i} variant="outline" className="text-xs bg-accent/5 border-accent/20 text-muted-foreground px-2 py-0.5">
                              {resp}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ParallaxCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}