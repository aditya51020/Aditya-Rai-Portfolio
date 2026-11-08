import React, { useEffect, useRef } from 'react';
import { initCrowd } from './crowd';
import './CrowdHero.css';

/* A shorter band of the same crowd, used lower on the page so the site feels like one piece. */
export default function CrowdStrip({ label = "Everyone's waiting for your idea", seed = 29 }) {
  const heroRef = useRef(null);
  const crowdRef = useRef(null);

  useEffect(() => {
    return initCrowd({ hero: heroRef.current, crowd: crowdRef.current, startFrac: 0.2, scale: 0.85, seed });
  }, [seed]);

  return (
    <section className="crowd-hero crowd-strip" ref={heroRef}>
      <div className="crowd" ref={crowdRef} aria-hidden="true" />
      <div className="fade" />
      <div className="copy">
        <p>{label} ↓</p>
      </div>
    </section>
  );
}
