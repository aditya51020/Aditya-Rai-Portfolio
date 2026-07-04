import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowRight, Check } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus('loading');
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE",
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: `New Portfolio Message from ${formState.name}`,
        }),
      });
      
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-32 px-6 max-w-5xl mx-auto border-t border-white/[0.04]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column: Headline & Social Links */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
          <div className="space-y-6">
            <span className="text-[11px] uppercase tracking-[0.25em] text-zinc-500 font-semibold block">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white tracking-tight leading-tight">
              Have an idea? <br />
              <span className="text-gradient">Let's build it.</span>
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
              I am open to contract roles, custom SaaS development, and architectural consulting. Reach out to discuss how we can partner together.
            </p>
          </div>

          {/* Social Info & Links */}
          <div className="space-y-6">
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold block">
                Connect Directly
              </span>
              <a
                href="mailto:adityaworkdesk@gmail.com"
                className="flex items-center space-x-3 text-sm text-zinc-300 hover:text-white transition-colors duration-300 group"
              >
                <Mail className="h-4 w-4 text-zinc-500 group-hover:text-white transition-colors duration-300" />
                <span>adityaworkdesk@gmail.com</span>
              </a>
            </div>

            <div className="flex space-x-4 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-sm bg-white/[0.02] border border-white/[0.05] hover:border-white/20 hover:text-white text-zinc-400 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-sm bg-white/[0.02] border border-white/[0.05] hover:border-white/20 hover:text-white text-zinc-400 transition-all duration-300"
                aria-label="GitHub"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-8 md:p-10 rounded-lg relative overflow-hidden">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                >
                  <div className="h-12 w-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Check className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-serif text-white tracking-tight">
                    Inquiry Received
                  </h3>
                  <p className="text-zinc-500 text-xs max-w-xs font-light">
                    Thank you. I will review your business requirements and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white pt-2 transition-colors duration-300 font-medium"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8"
                >
                  <div className="space-y-6">
                    {/* Name Input */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="John Doe"
                        className="bg-transparent border-b border-white/[0.08] focus:border-white pb-3 text-xs md:text-sm text-white placeholder-zinc-700 focus:outline-none transition-colors duration-300 w-full"
                        disabled={status === 'loading'}
                      />
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="john@company.com"
                        className="bg-transparent border-b border-white/[0.08] focus:border-white pb-3 text-xs md:text-sm text-white placeholder-zinc-700 focus:outline-none transition-colors duration-300 w-full"
                        disabled={status === 'loading'}
                      />
                    </div>

                    {/* Message Input */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="message" className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">
                        Project Scope / Details
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Briefly describe the business challenges you want to solve..."
                        className="bg-transparent border-b border-white/[0.08] focus:border-white pb-3 text-xs md:text-sm text-white placeholder-zinc-700 focus:outline-none transition-colors duration-300 resize-none w-full"
                        disabled={status === 'loading'}
                      />
                    </div>
                  </div>

                  {status === 'error' && (
                    <div className="p-3 text-xs bg-red-500/10 border border-red-500/30 text-red-400 rounded-sm">
                      Something went wrong. Please check your credentials or email me directly at adityaworkdesk@gmail.com.
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-white text-black hover:bg-zinc-200 disabled:bg-zinc-800 disabled:text-zinc-600 transition-colors duration-300 rounded-sm text-xs font-semibold uppercase tracking-widest flex items-center justify-center space-x-2"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <span>Processing...</span>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <ArrowRight className="h-3 w-3" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
