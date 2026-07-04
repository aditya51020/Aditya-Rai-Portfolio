import React from 'react';
import { motion } from 'framer-motion';

export default function Process() {
  const steps = [
    {
      id: '01',
      phase: 'Discovery',
      title: 'Aligning on Business Outcomes',
      description: 'We begin by defining the goals of the project. Who are the users? What are the business bottlenecks? This ensures we build a product that drives revenue or increases efficiency.',
    },
    {
      id: '02',
      phase: 'Planning',
      title: 'Architecture & Technical Scope',
      description: 'Defining the tech stack, API endpoints, schema structures, and infrastructure plan. We lay down an exact implementation schedule to guarantee delivery.',
    },
    {
      id: '03',
      phase: 'Design',
      title: 'High-Fidelity UI & User Journeys',
      description: 'Designing clean, modern user interfaces focused on layout, typography, and premium micro-interactions. Wireframes and visual mockups are approved before coding.',
    },
    {
      id: '04',
      phase: 'Development',
      title: 'Production-Grade Coding',
      description: 'Writing semantic React components, secure backend APIs, and setting up isolated databases. Continuous code reviews ensure high maintainability.',
    },
    {
      id: '05',
      phase: 'Deployment',
      title: 'Optimization & Production Launch',
      description: 'Configuring domain routing, SSL certifications, asset caching pipelines, and monitoring setups. Every asset is optimized for maximum Lighthouse scores.',
    },
    {
      id: '06',
      phase: 'Support',
      title: 'Maintenance & Consulting',
      description: 'Continuous bug support, server health monitoring, security audits, and iterations based on analytics data to ensure your business keeps moving forward.',
    },
  ];

  return (
    <section id="process" className="py-32 px-6 max-w-5xl mx-auto border-t border-white/[0.04]">
      {/* Title */}
      <div className="mb-20 space-y-4">
        <span className="text-[11px] uppercase tracking-[0.25em] text-zinc-500 font-semibold block">
          Workflow
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight">
          A Structured <span className="text-gradient">Engineering Process</span>
        </h2>
      </div>

      {/* Timeline steps */}
      <div className="relative border-l border-white/[0.06] ml-4 md:ml-6 space-y-16 py-4">
        {steps.map((step, idx) => (
          <motion.div
            key={step.phase}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="relative pl-8 md:pl-10 group"
          >
            {/* Timeline Dot Indicator */}
            <span className="absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full bg-zinc-800 border border-zinc-600 group-hover:bg-white group-hover:border-white transition-all duration-300" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
              {/* Step indicator */}
              <div className="md:col-span-3 space-y-1">
                <span className="text-[10px] tracking-widest uppercase text-zinc-500 font-bold block">
                  {`Phase ${step.id}`}
                </span>
                <span className="text-sm font-medium text-white tracking-tight">
                  {step.phase}
                </span>
              </div>

              {/* Step Content */}
              <div className="md:col-span-9 space-y-2">
                <h3 className="text-base font-semibold text-zinc-200 group-hover:text-white transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300 text-xs font-light leading-relaxed max-w-2xl">
                  {step.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
