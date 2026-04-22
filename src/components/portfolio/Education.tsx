"use client";

import { motion, type Variants } from "framer-motion";
import { education } from "@/data/resume";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, BookOpen } from "lucide-react";
import { ParallaxCard } from "./ParallaxCard";

interface EducationProps {
  className?: string;
}

export function Education({ className }: EducationProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section id="education" className={`py-12 px-6 ${className || ""}`}>
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4 }} className="mb-6">
          <span className="inline-block text-xs tracking-[0.2em] uppercase text-accent mb-2 neon-text-glow">Academic Background</span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium">Education</h2>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="space-y-4">
          {education.map((edu) => (
            <motion.div key={edu.id} variants={itemVariants}>
              <ParallaxCard>
                <Card className="bg-card/60 border-border/60">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 flex items-center justify-center bg-accent/10 border border-accent/20 neon-glow shrink-0">
                        <GraduationCap size={16} className="text-accent" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                          <div>
                            <h3 className="font-serif text-base">{edu.degree}</h3>
                            <p className="text-sm text-accent">{edu.institution}</p>
                          </div>
                          <span className="text-xs text-muted-foreground shrink-0">GPA: <span className="text-accent neon-text-glow">{edu.gpa}</span></span>
                        </div>

                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1.5"><MapPin size={12} />{edu.location}</span>
                          <span>{edu.startDate} — {edu.endDate}</span>
                        </div>

                        {edu.research && (
                          <div className="mt-3 pt-3 border-t border-border/40">
                            <div className="flex items-start gap-2">
                              <BookOpen size={13} className="text-accent/50 mt-0.5" />
                              <div>
                                <span className="text-xs uppercase tracking-wider text-accent/40">Research</span>
                                <p className="text-sm text-muted-foreground mt-0.5">{edu.research}</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
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