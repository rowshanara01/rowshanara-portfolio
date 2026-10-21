import React from 'react';
import { ArrowRight, Github, ExternalLink, Play, Terminal, FileText, Zap, Smartphone } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onFlowClick: () => void;
  onResumeClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onExploreClick, 
  onFlowClick, 
  onResumeClick 
}) => {
  return (
    <section className="relative overflow-hidden pt-16 md:pt-24 pb-14 md:pb-20 px-4 md:px-8 border-b border-slate-800/80 bg-gradient-to-b from-slate-900/40 via-slate-950 to-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Zero-Pill Unboxed Metadata Header */}
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-4 tracking-wide flex-wrap">
          <span>FULL-STACK &amp; MOBILE ENGINEER</span>
          <span aria-hidden="true">·</span>
          <span>SAAS, CONVERSATIONAL AI &amp; FLUTTER</span>
          <span aria-hidden="true">·</span>
          <span>AVAILABLE FOR HIRE</span>
        </div>

        {/* Display Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display text-white tracking-tight leading-tight max-w-4xl text-balance">
          Engineering Resilient SaaS Platforms, Autonomous AI &amp; Flutter Mobile Apps.
        </h1>

        {/* Subhead / Elevator Pitch */}
        <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
          Hi, I&apos;m <strong>Rowshanara Akhter</strong>. I design and build production-grade web and mobile applications with a focus on e-commerce operating systems, automated Meta Messenger commerce bots with live courier parcel booking, and native cross-platform mobile apps using Flutter &amp; Dart for iOS and Android.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-3.5">
          <button
            onClick={onExploreClick}
            className="px-5 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center gap-2 shadow-sm active:scale-95"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Inspect Live Production Systems</span>
          </button>

          <button
            onClick={onFlowClick}
            className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 border border-cyan-500/40 text-cyan-300 text-xs sm:text-sm font-medium rounded-lg transition-colors flex items-center gap-2"
          >
            <Zap className="w-4 h-4 text-cyan-400" />
            <span>Live Flow Simulator</span>
          </button>

          <button
            onClick={onResumeClick}
            className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs sm:text-sm font-medium rounded-lg transition-colors flex items-center gap-2"
          >
            <FileText className="w-4 h-4 text-slate-400" />
            <span>Curriculum Vitae</span>
          </button>

          <a
            href="https://github.com/rowshanara01"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 text-xs sm:text-sm text-slate-400 hover:text-white font-mono flex items-center gap-1.5 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/rowshanara-akhter"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 text-xs sm:text-sm text-cyan-400 hover:text-cyan-300 font-mono flex items-center gap-1.5 transition-colors"
          >
            <span>LinkedIn ↗</span>
          </a>
        </div>

        {/* Quantitative Metrics Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400 tabular-nums">
              &lt; 420ms
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">
              Average Message Latency
            </div>
            <div className="text-[11px] text-slate-500 font-mono mt-0.5">
              Queue optimization
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400 tabular-nums">
              60 FPS
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">
              Flutter Mobile Smoothness
            </div>
            <div className="text-[11px] text-slate-500 font-mono mt-0.5">
              Riverpod &amp; Hive offline
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
              15–30 Days
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">
              Free Domain Trials
            </div>
            <div className="text-[11px] text-slate-500 font-mono mt-0.5">
              Automated expiry gates
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400 tabular-nums">
              100%
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">
              Validated Form Payloads
            </div>
            <div className="text-[11px] text-slate-500 font-mono mt-0.5">
              Zero dropped orders
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
