import React from 'react';
import { motion } from 'framer-motion';

export default function Trust() {
  const metrics = [
    {
      value: '24+',
      label: 'Projects Delivered',
      description: 'Production-ready web applications, APIs, and AI integrations.',
    },
    {
      value: '99%',
      label: 'Client Satisfaction',
      description: 'Long-term client relationships and consistent technical consulting.',
    },
    {
      value: '15+',
      label: 'Modern Technologies',
      description: 'Full stack development utilizing modern robust ecosystems.',
    },
    {
      value: '4+',
      label: 'Years Freelancing',
      description: 'Providing technical leadership and software consulting.',
    },
  ];

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto border-t border-white/[0.04]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, idx) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel glass-panel-hover p-8 rounded-lg flex flex-col justify-between space-y-4"
          >
            <div>
              <span className="text-4xl md:text-5xl font-light text-white font-serif tracking-tight">
                {metric.value}
              </span>
              <h3 className="text-xs uppercase tracking-widest text-zinc-400 mt-3 font-semibold">
                {metric.label}
              </h3>
            </div>
            <p className="text-zinc-500 text-xs leading-relaxed font-light">
              {metric.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
