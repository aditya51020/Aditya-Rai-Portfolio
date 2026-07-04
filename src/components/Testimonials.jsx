import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      quote: "Aditya redesigned our property portal from the ground up. He took ownership of the entire engineering pipeline, and the speed improvement directly led to an increase in lead captures.",
      client: "Director of Product",
      company: "StarX Properties",
      project: "Headless Real Estate System",
    },
    {
      quote: "We hired Aditya to build a custom internal analytics system. Not only did he deliver clean, maintainable code ahead of schedule, but his advice on database optimization saved us thousands of dollars in hosting bills.",
      client: "Chief Technical Officer",
      company: "Apex Logistics SaaS",
      project: "Real-time Tracking Portal",
    },
    {
      quote: "Aditya's ability to integrate complex LLM models into our existing Node.js architecture was outstanding. He understands business requirements instantly and implements them with minimal friction.",
      client: "Founder & CEO",
      company: "Synergy Accounting",
      project: "Agentic Document Parsing Engine",
    },
  ];

  return (
    <section className="py-32 px-6 max-w-5xl mx-auto border-t border-white/[0.04]">
      {/* Title */}
      <div className="mb-20 space-y-4">
        <span className="text-[11px] uppercase tracking-[0.25em] text-zinc-500 font-semibold block">
          Client Success
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight">
          What My Partners <span className="text-gradient">Say About Me</span>
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((rev, idx) => (
          <motion.div
            key={rev.company}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel p-8 rounded-lg flex flex-col justify-between space-y-6 relative"
          >
            <Quote className="absolute top-6 right-6 h-5 w-5 text-white/[0.02] pointer-events-none" />
            
            <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
              "{rev.quote}"
            </p>

            <div className="space-y-1.5 border-t border-white/[0.05] pt-4">
              <span className="text-xs font-semibold text-white block">
                {rev.client}
              </span>
              <div className="flex justify-between items-center text-[10px] uppercase tracking-wider text-zinc-500">
                <span>{rev.company}</span>
                <span className="text-white/[0.3] font-medium">{rev.project}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
