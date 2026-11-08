import React, { useEffect } from 'react';
import { PeekRow } from './components/Peekers';
import CrowdStrip from './components/CrowdStrip';
import { initPeekers } from './components/crowd';
import Lenis from 'lenis';
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';
import CrowdHero from './components/CrowdHero';
import ProfileHub from './components/ProfileHub';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.085,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    window.lenis = lenis;

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  // every [data-peeker] on the page gets a character that watches the cursor
  useEffect(() => initPeekers(), []);

  return (
    <div className="relative min-h-screen selection:bg-zinc-800 selection:text-white overflow-x-clip text-zinc-300 font-sans bg-[#030303]">
      {/* Premium background canvas (lines, slow particles, cursor glow follow) */}
      <BackgroundCanvas />

      {/* Floating navigation header */}
      <Navbar />

      {/* Content wrapper */}
      <main className="relative z-10 w-full">
        <CrowdHero />
        <ProfileHub />
        <CrowdStrip />
        <Contact />
        <PeekRow people={[{ seed: 64, size: 127, x: 6 }, { seed: 12, size: 109, x: 34, flip: true }, { seed: 45, size: 120, x: 62 }, { seed: 88, size: 104, x: 86, flip: true }]} />
        <Footer />
      </main>
    </div>
  );
}
