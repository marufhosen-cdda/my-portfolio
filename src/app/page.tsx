import { About, Contact, Education, Experience, Footer, Hero, Navbar, Projects, Skills } from "@/components/portfolio";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
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
