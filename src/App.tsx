import { useEffect, useState } from "react";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { ScrollProgressBar } from "@/components/layout/ScrollProgressBar";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
  }, [loading]);

  return (
    <>
      <LoadingScreen visible={loading} />
      <ScrollProgressBar />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
