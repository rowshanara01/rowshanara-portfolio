import React from 'react';
import { Github, Linkedin, ExternalLink, Mail } from 'lucide-react';

export const CleanFooter: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-10 px-4 md:px-8 text-xs text-slate-400">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-sm font-bold font-display text-white">
            Rowshanara Akhter
          </div>
          <p className="mt-0.5 text-slate-500">
            Full-Stack Software Engineer · SaaS &amp; AI Systems
          </p>
        </div>

        <div className="flex items-center gap-6 font-mono text-xs">
          <a
            href="https://github.com/rowshanara01"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rowshanara-akhter"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://persional-website-8fey.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            Vercel
          </a>
          <a
            href="mailto:rowshanaraakhter9@gmail.com"
            className="hover:text-cyan-400 transition-colors"
          >
            Email
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-6 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-600">
        <div>&copy; {new Date().getFullYear()} Rowshanara Akhter. All rights reserved.</div>
        <div>Built with React, TypeScript &amp; Tailwind CSS</div>
      </div>
    </footer>
  );
};
