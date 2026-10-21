import React, { useState } from 'react';
import { UserCustomProfile, Language, ProjectItem } from '../types/portfolio';
import { INITIAL_PROJECTS } from '../data/mockProjects';
import { 
  Bot, 
  Cloud, 
  Terminal, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail, 
  ArrowUpRight, 
  Play, 
  Layers, 
  CheckCircle, 
  Sparkles,
  Download,
  Copy,
  Check
} from 'lucide-react';
import { AiChatbotSimulator } from './AiChatbotSimulator';
import { SaasDashboardSimulator } from './SaasDashboardSimulator';

interface VercelPortfolioViewProps {
  profile: UserCustomProfile;
  language: Language;
  onEditProfile: () => void;
}

export const VercelPortfolioView: React.FC<VercelPortfolioViewProps> = ({
  profile,
  language,
  onEditProfile,
}) => {
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectItem | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="bg-slate-950 text-slate-100">
      {/* Vercel Portfolio Hero */}
      <section className="py-16 md:py-24 px-4 md:px-8 border-b border-slate-800/80 bg-gradient-to-b from-slate-900/40 via-slate-950 to-slate-950">
        <div className="max-w-5xl mx-auto">
          {/* Status Badge */}
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>AVAILABLE FOR FULL-STACK SAAS &amp; AI ROLES</span>
            <span aria-hidden="true">·</span>
            <span>REMOTE / GLOBAL</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display text-white tracking-tight leading-tight">
            {profile.name}
          </h1>

          <p className="mt-3 text-lg md:text-xl font-medium text-cyan-400 font-mono">
            {profile.title}
          </p>

          <p className="mt-5 text-sm md:text-base text-slate-300 leading-relaxed max-w-3xl">
            {profile.bio}
          </p>

          {/* Quick Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#featured-projects"
              className="px-5 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs md:text-sm font-semibold rounded-lg transition-all flex items-center gap-2 shadow-sm"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>{language === 'bn' ? 'লাইভ স্যান্ডবক্স ডেমো দেখুন' : 'Explore Live Interactive Sandboxes'}</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs md:text-sm font-medium rounded-lg transition-colors flex items-center gap-2"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Mail className="w-4 h-4 text-cyan-400" />}
              <span>{copiedEmail ? (language === 'bn' ? 'ইমেইল কপি হয়েছে!' : 'Email Copied!') : profile.email}</span>
            </button>

            <button
              onClick={onEditProfile}
              className="px-3.5 py-2.5 text-xs text-slate-400 hover:text-white transition-colors border border-dashed border-slate-800 rounded-lg"
            >
              {language === 'bn' ? 'তথ্য এডিট করুন' : 'Edit My Info'}
            </button>
          </div>

          {/* Social Proof Links */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4 text-slate-300" />
              <span>GitHub / Repos</span>
            </a>

            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4 text-indigo-400" />
              <span>LinkedIn / Profile</span>
            </a>

            <a
              href={profile.currentSiteUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-cyan-400" />
              <span>Current Vercel Deployment</span>
            </a>
          </div>
        </div>
      </section>

      {/* Engineering Competencies Matrix */}
      <section className="py-12 md:py-16 px-4 md:px-8 border-b border-slate-800/80 max-w-5xl mx-auto">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
          <span>TECHNICAL SPECIALIZATIONS</span>
          <span aria-hidden="true">·</span>
          <span>PRODUCTION-PROVEN ARCHITECTURES</span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold font-display text-white tracking-tight mb-8">
          {language === 'bn' ? 'প্রধান প্রযুক্তিগত দক্ষতা ও আর্কিটেকচার' : 'Core Engineering Domains & Tech Stack'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: AI & RAG */}
          <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-5">
            <div className="w-9 h-9 rounded-lg bg-cyan-950 border border-cyan-800/40 flex items-center justify-center text-cyan-400 mb-3">
              <Bot className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1">
              AI &amp; Conversational RAG
            </h3>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Autonomous conversational workflows, vector similarity search, dense embeddings, sub-second token streaming.
            </p>
            <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-cyan-300">
              <span className="bg-slate-950 px-2 py-0.5 rounded border border-slate-800">pgvector</span>
              <span className="bg-slate-950 px-2 py-0.5 rounded border border-slate-800">LangChain</span>
              <span className="bg-slate-950 px-2 py-0.5 rounded border border-slate-800">Gemini/OpenAI</span>
              <span className="bg-slate-950 px-2 py-0.5 rounded border border-slate-800">Pinecone</span>
            </div>
          </div>

          {/* Card 2: SaaS Platforms */}
          <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-5">
            <div className="w-9 h-9 rounded-lg bg-indigo-950 border border-indigo-800/40 flex items-center justify-center text-indigo-400 mb-3">
              <Cloud className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1">
              Multi-Tenant SaaS
            </h3>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Isolated workspace schemas, Stripe usage-based monetization, webhook idempotency, and RBAC team roles.
            </p>
            <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-indigo-300">
              <span className="bg-slate-950 px-2 py-0.5 rounded border border-slate-800">Stripe Billing</span>
              <span className="bg-slate-950 px-2 py-0.5 rounded border border-slate-800">PostgreSQL RLS</span>
              <span className="bg-slate-950 px-2 py-0.5 rounded border border-slate-800">Prisma / Drizzle</span>
              <span className="bg-slate-950 px-2 py-0.5 rounded border border-slate-800">Redis</span>
            </div>
          </div>

          {/* Card 3: Modern Full-Stack */}
          <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-5">
            <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-200 mb-3">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1">
              Full-Stack &amp; Performance
            </h3>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Type-safe full-stack microservices, accessible WCAG interfaces, and zero-latency deployment on Vercel/Docker.
            </p>
            <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-slate-300">
              <span className="bg-slate-950 px-2 py-0.5 rounded border border-slate-800">Next.js / React 19</span>
              <span className="bg-slate-950 px-2 py-0.5 rounded border border-slate-800">TypeScript</span>
              <span className="bg-slate-950 px-2 py-0.5 rounded border border-slate-800">Node / Express</span>
              <span className="bg-slate-950 px-2 py-0.5 rounded border border-slate-800">Tailwind v4</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects with In-Browser Live Sandboxes */}
      <section id="featured-projects" className="py-12 md:py-20 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
              <span>DEPLOYED SYSTEMS</span>
              <span aria-hidden="true">·</span>
              <span>TEST DIRECTLY IN BROWSER</span>
            </div>
            <h2 className="text-xl md:text-3xl font-bold font-display text-white tracking-tight">
              {language === 'bn' ? 'প্রধান SaaS ও AI চ্যাটবট প্রজেক্ট' : 'Featured Production Case Studies'}
            </h2>
          </div>
        </div>

        <div className="space-y-8">
          {INITIAL_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-slate-700 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                    <span>{project.status}</span>
                    <span aria-hidden="true">·</span>
                    <span className="capitalize">{project.category.replace('-', ' ')}</span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-white">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">{project.subtitle}</p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="px-3.5 py-1.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors shadow-sm"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{language === 'bn' ? 'লাইভ টেস্ট স্যান্ডবক্স' : 'Interactive Sandbox'}</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Problem / Solution */}
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300">
                <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800">
                  <span className="text-slate-400 font-semibold block mb-1">
                    {language === 'bn' ? 'সমস্যা (Problem):' : 'The Challenge:'}
                  </span>
                  <p className="leading-relaxed">{project.problem}</p>
                </div>

                <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800">
                  <span className="text-cyan-400 font-semibold block mb-1">
                    {language === 'bn' ? 'সমাধান (Solution):' : 'Engineered Architecture:'}
                  </span>
                  <p className="leading-relaxed">{project.solution}</p>
                </div>
              </div>

              {/* Metrics strip */}
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-slate-800/80">
                {project.metrics.map((m, mIdx) => (
                  <div key={mIdx}>
                    <div className="text-base font-bold font-mono text-cyan-400 tabular-nums">{m.value}</div>
                    <div className="text-[11px] text-slate-300">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Tech Stack list */}
              <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
                <span className="text-slate-500 font-sans">Stack:</span>
                {project.techStack.map((tech, tIdx) => (
                  <span key={tIdx} className="bg-slate-950 px-2 py-0.5 rounded border border-slate-800 text-[11px]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
            <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-white">{activeProjectModal.title}</h4>
                <p className="text-xs text-slate-400 font-mono">Live Sandbox Environment</p>
              </div>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="text-xs px-3 py-1 bg-slate-800 hover:bg-slate-700 text-white rounded font-medium"
              >
                Close
              </button>
            </div>
            <div className="p-4 md:p-6 overflow-y-auto">
              {activeProjectModal.category === 'ai-chatbot' || activeProjectModal.category === 'ai-document' ? (
                <AiChatbotSimulator language={language} />
              ) : (
                <SaasDashboardSimulator language={language} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
