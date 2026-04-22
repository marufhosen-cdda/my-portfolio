"use client";

import { motion, type Variants } from "framer-motion";
import { personalInfo } from "@/data/resume";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>;
}

function LinkedinIcon({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554v-11.452h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zm-15.11-13.019c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019h-3.564v-11.452h3.564v11.452zm15.106-20.452h-20.454c-.979 0-1.771.774-1.771 1.729v20.542c0 .956.792 1.729 1.771 1.729h20.451c.978 0 1.778-.773 1.778-1.729v-20.542c0-.955-.8-1.729-1.778-1.729z" /></svg>;
}

interface ContactProps {
  className?: string;
}

export function Contact({ className }: ContactProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <section id="contact" className={`py-12 px-6 bg-card/30 ${className || ""}`}>
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4 }} className="mb-6 text-center">
          <span className="inline-block text-xs tracking-[0.2em] uppercase text-accent mb-2 neon-text-glow">Get in Touch</span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-3">Contact</h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">Interested in working together? Feel free to reach out.</p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
          <Card className="bg-card/60 border-border/60 max-w-xl mx-auto neon-glow hover:neon-border-glow transition-all duration-200">
            <CardContent className="p-5">
              <div className="grid sm:grid-cols-2 gap-3">
                <motion.div variants={itemVariants}>
                  <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 p-4 border border-border/60 hover:border-accent/40 hover:bg-accent/5 transition-all group">
                    <div className="w-10 h-10 flex items-center justify-center bg-accent/10 group-hover:bg-accent/15 transition-colors neon-glow">
                      <Mail size={16} className="text-accent" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-accent/60">Email</span>
                      <p className="text-sm truncate text-accent">{personalInfo.email}</p>
                    </div>
                  </a>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-3 p-4 border border-border/60 hover:border-accent/40 hover:bg-accent/5 transition-all group">
                    <div className="w-10 h-10 flex items-center justify-center bg-accent/10 group-hover:bg-accent/15 transition-colors neon-glow">
                      <Phone size={16} className="text-accent" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-accent/60">Phone</span>
                      <p className="text-sm text-accent">{personalInfo.phone}</p>
                    </div>
                  </a>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 border border-border/60 hover:border-accent/40 hover:bg-accent/5 transition-all group">
                    <div className="w-10 h-10 flex items-center justify-center bg-accent/10 group-hover:bg-accent/15 transition-colors neon-glow">
                      <LinkedinIcon className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-accent/60">LinkedIn</span>
                      <p className="text-sm">Connect</p>
                    </div>
                  </a>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <a href={personalInfo.github[0]} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 border border-border/60 hover:border-accent/40 hover:bg-accent/5 transition-all group">
                    <div className="w-10 h-10 flex items-center justify-center bg-accent/10 group-hover:bg-accent/15 transition-colors neon-glow">
                      <GithubIcon className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-accent/60">GitHub</span>
                      <p className="text-sm">Repositories</p>
                    </div>
                  </a>
                </motion.div>
              </div>

              <motion.div variants={itemVariants} className="mt-5 pt-4 border-t border-border/40 text-center">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={14} className="text-accent/50" />
                  <span>{personalInfo.location}</span>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}