import React from 'react';
import { Language, UserCustomProfile } from '../types/portfolio';
import { ExternalLink, Github, Linkedin, Mail, Heart } from 'lucide-react';

interface FooterProps {
  language: Language;
  profile: UserCustomProfile;
  onOpenCustomizer: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  profile,
  onOpenCustomizer,
}) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-12 px-4 md:px-8 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 font-display text-sm font-bold text-white">
            <span>{profile.name}</span>
            <span className="text-slate-500 font-normal">·</span>
            <span className="text-cyan-400 font-mono text-xs">{profile.title}</span>
          </div>
          <p className="mt-1 text-slate-500">
            {language === 'bn' 
              ? 'SaaS প্ল্যাটফর্ম ও AI চ্যাটবট ইঞ্জিনিয়ারিং পোর্টফোলিও ফ্রেমওয়ার্ক।' 
              : 'Production SaaS and AI Chatbot engineering portfolio blueprint.'}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href={profile.currentSiteUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition-colors flex items-center gap-1 font-mono"
          >
            <span>Live Site</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition-colors flex items-center gap-1 font-mono"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition-colors flex items-center gap-1 font-mono"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>

          <button
            onClick={onOpenCustomizer}
            className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
          >
            {language === 'bn' ? 'প্রোফাইল এডিট' : 'Edit Profile'}
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-600">
        <div>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</div>
        <div>Engineered for senior SaaS &amp; AI recruitment standards</div>
      </div>
    </footer>
  );
};
