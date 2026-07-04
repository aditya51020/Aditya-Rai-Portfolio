import React from 'react';
import { motion } from 'framer-motion';

export default function TechStack() {
  const stack = [
    {
      category: 'Frontend Architecture',
      items: [
        { name: 'React', desc: 'Component architecture, custom hooks, context state.' },
        { name: 'Next.js', desc: 'App router, server components, static generation.' },
        { name: 'Tailwind CSS', desc: 'Responsive utilities, bespoke design tokens.' },
      ],
    },
    {
      category: 'Backend & Databases',
      items: [
        { name: 'Node.js', desc: 'Event-driven, asynchronous server environments.' },
        { name: 'Express', desc: 'Robust routing, RESTful design, custom middleware.' },
        { name: 'MongoDB', desc: 'Flexible document storage, complex aggregations.' },
        { name: 'PostgreSQL', desc: 'Relational data integrity, indexing, advanced queries.' },
      ],
    },
    {
      category: 'Artificial Intelligence',
      items: [
        { name: 'OpenAI API', desc: 'GPT models, embeddings, text/code generation.' },
        { name: 'Gemini API', desc: 'Multi-modal processing, large-context reasoning.' },
        { name: 'LangChain', desc: 'Agentic workflows, model chaining, memory buffers.' },
      ],
    },
    {
      category: 'DevOps & Tooling',
      items: [
        { name: 'Git', desc: 'Version control, atomic commits, branch collaboration.' },
        { name: 'Docker', desc: 'Isolated application packaging and containers.' },
        { name: 'Vercel', desc: 'CI/CD pipeline deployments, edge function routing.' },
      ],
    },
  ];

  return (
    <section className="py-32 px-6 max-w-5xl mx-auto border-t border-white/[0.04]">
      {/* Title */}
      <div className="mb-20 space-y-4">
        <span className="text-[11px] uppercase tracking-[0.25em] text-zinc-500 font-semibold block">
          Ecosystem
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight">
          Modern & Robust <span className="text-gradient">Technology Stack</span>
        </h2>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {stack.map((cat, idx) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel p-8 rounded-lg space-y-6"
          >
            <h3 className="text-sm font-medium text-white tracking-wider border-b border-white/[0.05] pb-3 uppercase">
              {cat.category}
            </h3>
            <ul className="space-y-4">
              {cat.items.map((item) => (
                <li key={item.name} className="flex flex-col space-y-1 group">
                  <div className="flex items-center space-x-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-600 group-hover:bg-white transition-colors duration-300" />
                    <span className="text-xs font-semibold text-zinc-200 group-hover:text-white transition-colors duration-300">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-zinc-500 text-[11px] pl-3.5 font-light">
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
