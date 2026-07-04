import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // premium ease-out
      },
    },
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-start pt-32 pb-16 px-6 max-w-5xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full space-y-8"
      >
        {/* Availability Badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center space-x-2">
          <span className="text-[11px] uppercase tracking-[0.25em] text-zinc-500 font-semibold">
            Based in India &mdash; Available Globally
          </span>
        </motion.div>

        {/* Big Display Title */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-7xl font-serif text-white tracking-tight leading-[1.08] max-w-4xl"
        >
          Building Software That Solves <span className="text-gradient">Real Business Problems.</span>
        </motion.h1>

        {/* Subhead / Value Prop */}
        <motion.p
          variants={itemVariants}
          className="text-zinc-400 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl"
        >
          I design, develop, and deploy modern web applications, AI-powered solutions, and business software that help companies move faster and grow.
        </motion.p>

        {/* Core Credentials */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-x-8 gap-y-3 pt-2 text-xs uppercase tracking-widest text-zinc-500 font-medium border-t border-white/[0.05] max-w-3xl"
        >
          <div className="flex items-center space-x-2">
            <span className="h-1 w-1 rounded-full bg-zinc-600" />
            <span>Freelance Developer</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="h-1 w-1 rounded-full bg-zinc-600" />
            <span>Full Stack Engineer</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="h-1 w-1 rounded-full bg-zinc-600" />
            <span>AI Integration Specialist</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
          <a
            href="#projects"
            className="px-6 py-3.5 bg-white text-black hover:bg-zinc-200 transition-colors duration-300 rounded-sm text-xs font-semibold uppercase tracking-widest"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3.5 bg-transparent text-white border border-white/20 hover:border-white transition-colors duration-300 rounded-sm text-xs font-semibold uppercase tracking-widest"
          >
            Let's Talk
          </a>
        </motion.div>
      </motion.div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-6 hidden md:flex items-center space-x-2.5 text-zinc-600 text-[10px] uppercase tracking-widest"
      >
        <span>Scroll to Explore</span>
        <ArrowDown className="h-3 w-3 animate-bounce" />
      </motion.div>
    </section>
  );
}
