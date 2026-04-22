"use client";

import { navItems, personalInfo } from "@/data/resume";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

interface NavbarProps {
  className?: string;
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <div className="w-5 h-4 flex flex-col justify-between relative">
      <span className={cn("block h-0.5 w-full bg-current transition-all duration-300 origin-center", open ? "rotate-45 top-[7px]" : "top-0")} />
      <span className={cn("block h-0.5 w-full bg-current transition-all duration-300", open ? "opacity-0 scale-0" : "opacity-100 scale-100")} />
      <span className={cn("block h-0.5 w-full bg-current transition-all duration-300 origin-center", open ? "-rotate-45 bottom-[7px]" : "bottom-0")} />
    </div>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>;
}

export function Navbar({ className }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 60;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const handleNavClick = useCallback((id: string) => {
    closeMobileMenu();
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  }, [closeMobileMenu]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobileMenu();
    };
    if (mobileMenuOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen, closeMobileMenu]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <motion.header
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "bg-background/90 backdrop-blur-md border-b border-border/60" : "bg-transparent",
          className
        )}
      >
        <nav className="max-w-3xl mx-auto px-4 py-2.5 flex items-center justify-between">
          <motion.a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick("hero"); }}
            className="font-serif text-sm text-accent neon-text-glow"
            whileHover={{ scale: 1.02 }}
          >
            {personalInfo.name.split(" ")[0]}
            <span className="text-foreground">.</span>
          </motion.a>

          <div className="flex items-center gap-2">
            <ul className="hidden sm:flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={cn(
                      "relative px-3 py-1.5 text-xs font-medium tracking-wide uppercase transition-colors duration-200",
                      activeSection === item.id ? "text-accent neon-text-glow" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {activeSection === item.id && (
                      <motion.span layoutId="activeSection" className="absolute inset-0 -z-10 border border-accent/40 bg-accent/5" transition={{ duration: 0.2 }} />
                    )}
                  </button>
                </li>
              ))}
            </ul>

            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors rounded-none"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  {theme === "dark" ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun size={18} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon size={18} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="sm:hidden p-2 text-accent hover:bg-accent/10 transition-colors"
              aria-label="Toggle menu"
            >
              <MenuIcon open={mobileMenuOpen} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] mobile-menu-overlay sm:hidden"
              onClick={closeMobileMenu}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] z-[70] bg-secondary border-l border-border/60 sm:hidden"
            >
              <div className="flex flex-col h-full p-6 pt-16">
                <motion.a
                  href="#hero"
                  onClick={(e) => { e.preventDefault(); handleNavClick("hero"); }}
                  className="font-serif text-lg text-accent mb-8 neon-text-glow"
                >
                  {personalInfo.name.split(" ")[0]}
                  <span className="text-foreground">.</span>
                </motion.a>

                <ul className="flex flex-col gap-1 flex-1">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                    >
                      <button
                        onClick={() => handleNavClick(item.id)}
                        className={cn(
                          "w-full text-left px-3 py-3 text-sm font-medium tracking-wide uppercase transition-colors duration-200 rounded-none",
                          activeSection === item.id ? "text-accent neon-text-glow bg-accent/5" : "text-muted-foreground hover:text-foreground hover:bg-accent/5"
                        )}
                      >
                        {item.label}
                      </button>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-3 pt-6 border-t border-border/40"
                >
                  <a
                    href={personalInfo.github[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center border border-border/60 hover:border-accent/40 hover:bg-accent/10 transition-colors text-muted-foreground hover:text-accent"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  {mounted && (
                    <button
                      onClick={toggleTheme}
                      className="w-10 h-10 flex items-center justify-center border border-border/60 hover:border-accent/40 hover:bg-accent/10 transition-colors text-muted-foreground hover:text-accent"
                      aria-label="Toggle theme"
                    >
                      <AnimatePresence mode="wait">
                        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                      </AnimatePresence>
                    </button>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}