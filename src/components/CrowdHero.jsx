import React, { useEffect, useRef, useState } from 'react';
import { initCrowd } from './crowd';
import './CrowdHero.css';

const ROLES = ['websites', 'data dashboards', 'ML models', 'AI products'];

export default function CrowdHero() {
  const [role, setRole] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setRole((r) => (r + 1) % ROLES.length), 2200);
    return () => clearInterval(id);
  }, []);
  const heroRef = useRef(null);
  const crowdRef = useRef(null);
  const defsRef = useRef(null);

  useEffect(() => {
    const cleanup = initCrowd({ hero: heroRef.current, crowd: crowdRef.current, defsEl: defsRef.current, startFrac: 0.4 });
    return cleanup;
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    if (window.lenis) window.lenis.scrollTo(href, { duration: 1.2 });
    else document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="crowd-hero" ref={heroRef}>
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" ref={defsRef} />
      <div className="crowd" ref={crowdRef} aria-hidden="true" />
      <div className="fade" />
      <div className="copy">
        <span className="kicker">Hi, I'm</span>
        <h1>ADITYA RAI</h1>
        <p>
          I build{' '}
          <span className="role" key={role}>{ROLES[role]}</span>
          <br />
          the whole crowd talks about
        </p>
        <a className="cta" href="#projects" onClick={(e) => scrollTo(e, '#projects')}>View Work</a>
      </div>
    </section>
  );
}
