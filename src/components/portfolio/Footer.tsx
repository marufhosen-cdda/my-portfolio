"use client";

import { personalInfo } from "@/data/resume";

function GithubIcon({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>;
}

function LinkedinIcon({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554v-11.452h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zm-15.11-13.019c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019h-3.564v-11.452h3.564v11.452zm15.106-20.452h-20.454c-.979 0-1.771.774-1.771 1.729v20.542c0 .956.792 1.729 1.771 1.729h20.451c.978 0 1.778-.773 1.778-1.729v-20.542c0-.955-.8-1.729-1.778-1.729z" /></svg>;
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border/50">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="font-serif text-base text-accent">{personalInfo.name}</p>
            <p className="text-sm text-muted-foreground">Web Developer • {personalInfo.location}</p>
          </div>

          <div className="flex items-center gap-3">
            <a href={personalInfo.github[0]} target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center border border-border/50 hover:border-accent/40 hover:bg-accent/10 transition-all text-muted-foreground hover:text-accent hover:shadow-[0_0_10px_rgba(0,255,156,0.15)]">
              <GithubIcon className="w-4 h-4" />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center border border-border/50 hover:border-accent/40 hover:bg-accent/10 transition-all text-muted-foreground hover:text-accent hover:shadow-[0_0_10px_rgba(0,255,156,0.15)]">
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">© {currentYear} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}