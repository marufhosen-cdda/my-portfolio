import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Maruf Hosen | Web Developer",
  description: "Dynamic and detail-oriented Web Developer specializing in modern JavaScript ecosystems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn("min-h-full flex flex-col antialiased", geistSans.variable, geistMono.variable, jetbrainsMono.variable, playfairDisplay.variable)}>
        <div className="grain-overlay" aria-hidden="true" />
        <div className="vignette" aria-hidden="true" />
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
