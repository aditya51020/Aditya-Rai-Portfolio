import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 max-w-5xl mx-auto border-t border-white/[0.04]">
      {/* Title */}
      <div className="mb-20 space-y-4">
        <span className="text-[11px] uppercase tracking-[0.25em] text-zinc-500 font-semibold block">
          Behind The Code
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight">
          Engineering with <span className="text-gradient">Business Purpose</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Narrative Storytelling */}
        <div className="lg:col-span-7 space-y-8 text-zinc-400 font-light text-xs sm:text-sm leading-relaxed">
          
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-widest text-white font-semibold">
              01 &mdash; How I Started Building
            </h3>
            <p>
              I began building software out of a fascination with creating tools that people actually use. What started as simple scripting quickly evolved into a passion for designing complex systems that bridge user interface details with robust server-side infrastructures.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-widest text-white font-semibold">
              02 &mdash; The Shift to Business Problems
            </h3>
            <p>
              Many developers focus solely on frameworks and code syntax. I view code as a means to a business end. Whether it is increasing a SaaS onboarding rate, automating invoice mapping, or creating high-intent real estate lead captures, my focus is always on writing software that improves bottom-line metrics.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-widest text-white font-semibold">
              03 &mdash; My Development Approach
            </h3>
            <p>
              I build production-ready applications by prioritizing maintainability, modular architecture, and optimization. This means self-documenting APIs, containerized environments, strict types, and robust databases that won't fail under traffic spikes.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-widest text-white font-semibold">
              04 &mdash; Commitment to Quality
            </h3>
            <p>
              Every line of code I ship is optimized to perform. I do not rely on bloated plugins or cookie-cutter templates. When you work with me, you get custom engineering built specifically for your business constraints, ensuring a fast, secure, and future-proof digital product.
            </p>
          </div>

        </div>

        {/* Right Column: Premium Photo/Illustration Placeholder */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[340px] aspect-[4/5] glass-panel rounded-lg p-6 flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Visual background details */}
            <div className="absolute top-0 right-0 h-40 w-40 bg-white/[0.02] rounded-full blur-3xl group-hover:bg-white/[0.04] transition-colors duration-500" />
            
            {/* Mock Portrait representation - Clean abstract geometry */}
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
              <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">
                Developer Profile
              </span>
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            <div className="flex-1 flex flex-col items-center justify-center py-6 space-y-6">
              {/* Minimal SVG Avatar composition */}
              <svg 
                viewBox="0 0 100 100" 
                className="w-24 h-24 text-zinc-700 group-hover:text-zinc-600 transition-colors duration-500"
              >
                <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M50 24 A 12 12 0 0 1 50 52 A 12 12 0 0 1 50 24 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M26 78 C 26 62, 38 60, 50 60 C 62 60, 74 62, 74 78" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              
              <div className="text-center space-y-1">
                <span className="text-sm font-serif text-white tracking-tight block">
                  Aditya Rai
                </span>
                <span className="text-[10px] uppercase tracking-widest text-zinc-500">
                  Full Stack Engineer
                </span>
              </div>
            </div>

            {/* Quick credentials inside photo placeholder */}
            <div className="border-t border-white/[0.06] pt-4 space-y-2 text-[10px] text-zinc-500">
              <div className="flex justify-between">
                <span>Location:</span>
                <span className="text-zinc-300 font-medium">India (UTC+5.5)</span>
              </div>
              <div className="flex justify-between">
                <span>Core Expertise:</span>
                <span className="text-zinc-300 font-medium">React, Node, AI</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
