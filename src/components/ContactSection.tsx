import React, { useState } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Send, CheckCircle2, Copy, Check } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const email = 'rowshanaraakhter9@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setFormSent(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setFormSent(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
            <span>GET IN TOUCH</span>
            <span aria-hidden="true">·</span>
            <span>LET&apos;S WORK TOGETHER</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Let&apos;s Build Something Resilient.
          </h2>

          <p className="text-sm text-slate-300 leading-relaxed">
            I am actively exploring full-stack software engineering roles, SaaS backend architecture contracts, and conversational AI consulting.
          </p>

          <div className="pt-4 space-y-3">
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <span className="text-slate-500">Direct Email:</span>
              <a href={`mailto:${email}`} className="text-cyan-400 hover:underline">
                {email}
              </a>
              <button
                onClick={handleCopyEmail}
                className="p-1 hover:text-white transition-colors"
                title="Copy email address"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono pt-2">
              <a
                href="https://github.com/rowshanara01"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>github.com/rowshanara01</span>
              </a>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <a
                href="https://www.linkedin.com/in/rowshanara-akhter"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>linkedin.com/in/rowshanara-akhter</span>
              </a>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <a
                href="https://persional-website-8fey.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-cyan-400" />
                <span>persional-website-8fey.vercel.app</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Message Form */}
        <div className="lg:col-span-7 bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8">
          <h3 className="text-base font-bold text-white mb-4">
            Send a Direct Message
          </h3>

          {formSent ? (
            <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 text-sm flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
              <div>
                <strong>Message Dispatched!</strong> Thank you for reaching out. I will respond to your email within 24 hours.
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Henderson"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Message / Project Scope
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your SaaS, AI, or full-stack engineering requirements..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold rounded-lg text-xs sm:text-sm transition-colors flex items-center gap-2 active:scale-95"
              >
                <span>Send Inbound Message</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
