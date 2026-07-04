import React, { useEffect } from 'react';
import Lenis from 'lenis';
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Projects from './components/Projects';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Process from './components/Process';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-zinc-800 selection:text-white overflow-hidden text-zinc-300 font-sans bg-[#030303]">
      {/* Premium background canvas (lines, slow particles, cursor glow follow) */}
      <BackgroundCanvas />

      {/* Floating navigation header */}
      <Navbar />

      {/* Content wrapper */}
      <main className="relative z-10 w-full">
        <Hero />
        <Trust />
        <Projects />
        <Services />
        <TechStack />
        <Process />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
