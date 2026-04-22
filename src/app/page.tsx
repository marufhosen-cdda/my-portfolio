import { Navbar, Hero, About, Experience, Skills, Projects, Education, Contact, Footer } from "@/components/portfolio";

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
