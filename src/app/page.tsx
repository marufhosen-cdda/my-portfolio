import { Navbar, Hero, About, Experience, Skills, Projects, Education, Contact, Footer, CursorGlow } from "@/components/portfolio";
import { Background3DDynamic } from "@/components/portfolio/Background3DDynamic";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <CursorGlow />
      <Background3DDynamic />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
