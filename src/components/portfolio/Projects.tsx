"use client";

import { motion, type Variants } from "framer-motion";
import { projects } from "@/data/resume";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { ParallaxCard } from "./ParallaxCard";

interface ProjectsProps {
  className?: string;
}

export function Projects({ className }: ProjectsProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section id="projects" className={`py-12 px-6 bg-card/30 ${className || ""}`}>
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4 }} className="mb-6">
          <span className="inline-block text-xs tracking-[0.2em] uppercase text-accent mb-2 neon-text-glow">Featured Work</span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium">Projects</h2>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ParallaxCard className="h-full">
                <Card className="bg-card/60 border-border/60 h-full flex flex-col">
                  <CardHeader className="p-5 pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="font-serif text-base text-accent">{project.name}</CardTitle>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors mt-0.5 hover:shadow-[0_0_8px_rgba(0,255,156,0.2)]">
                        <ExternalLink size={15} />
                      </a>
                    </div>
                  </CardHeader>
                  <CardContent className="p-5 pt-2 flex-1">
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                    <div className="space-y-3">
                      <div>
                        <span className="text-xs uppercase tracking-wider text-accent/50">Features</span>
                        <ul className="mt-1.5 space-y-1">
                          {project.features.slice(0, 3).map((feature, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-accent/40 mt-0.5">—</span>{feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <span className="text-xs uppercase tracking-wider text-accent/50">Tech</span>
                        <div className="flex flex-wrap gap-1.5 mt-1.5">
                          {project.tech.slice(0, 5).map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs bg-accent/5 border-accent/20 text-muted-foreground px-1.5 py-0.5">
                              {tech}
                            </Badge>
                          ))}
                        </div>
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