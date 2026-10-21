import React from 'react';
import { X, Printer, Download, Mail, ExternalLink, Github, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-3xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Top Action Bar */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-white">
              Rowshanara Akhter — Curriculum Vitae
            </h3>
            <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
              Verified Candidate
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Body */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-slate-300 font-sans text-xs md:text-sm bg-slate-950">
          {/* Header */}
          <div className="border-b border-slate-800 pb-5">
            <h1 className="text-2xl font-bold font-display text-white">Rowshanara Akhter</h1>
            <div className="text-cyan-400 font-mono text-xs mt-0.5">
              Full-Stack Software Engineer · SaaS, Conversational AI &amp; Flutter Mobile (iOS/Android)
            </div>
            <div className="mt-2 text-xs text-slate-400 font-mono flex flex-wrap gap-4">
              <span>Email: rowshanaraakhter9@gmail.com</span>
              <span>·</span>
              <span>GitHub: github.com/rowshanara01</span>
              <span>·</span>
              <span>LinkedIn: linkedin.com/in/rowshanara-akhter</span>
              <span>·</span>
              <span>Portfolio: persional-website-8fey.vercel.app</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono mb-2">
              Professional Summary
            </h2>
            <p className="text-slate-300 leading-relaxed text-xs">
              Full-Stack &amp; Cross-Platform Mobile Engineer with specialized production experience building multi-tenant e-commerce SaaS platforms, native iOS/Android companion apps using Flutter &amp; Dart, automated Meta Messenger commerce bots with live courier parcel booking, and fault-tolerant conversational AI systems. Proven expertise across cross-tab state synchronization, silent form submission debugging, offline-first mobile caching (Hive), and zero-downtime AI API failover routing.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono mb-2">
              Core Technical Competencies
            </h2>
            <div className="space-y-1 text-xs text-slate-300">
              <div><strong className="text-white">Mobile (Cross-Platform):</strong> Flutter 3.x, Dart, Riverpod State Management, Hive Offline Storage, Firebase FCM Push Alerts</div>
              <div><strong className="text-white">Frontend Web:</strong> React 19, Next.js 15, TypeScript, Tailwind CSS, Vite, BroadcastChannel API, Zod</div>
              <div><strong className="text-white">Backend &amp; DB:</strong> Node.js, Express, PostgreSQL, Prisma, Redis, REST Microservices, JWT Auth, Row-Level Security</div>
              <div><strong className="text-white">AI &amp; Webhooks:</strong> Meta Developer Graph API, Gemini API, OpenAI, pgvector, Circuit Breaker Fallback</div>
              <div><strong className="text-white">Logistics &amp; SaaS:</strong> Steadfast Courier API, Pathao Courier API, Stripe Billing, Docker, Vercel</div>
            </div>
          </div>

          {/* Featured Production Engineering Experience / Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono mb-3">
              Production Systems &amp; Engineering Experience
            </h2>

            {/* Project 1: SaaS */}
            <div className="space-y-2 mb-4 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white">StorePulse SaaS — E-Commerce Operating Platform</h3>
                <span className="text-[11px] font-mono text-emerald-400">Production Live</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 leading-relaxed">
                <li>Architected a multi-tenant storefront engine supporting 15/30-day automated free domain trials with subscription renewal gates.</li>
                <li>Eliminated silent checkout drops by implementing strict Zod schema validation across client forms and server endpoints.</li>
                <li>Built a cross-tab synchronization bus using the BroadcastChannel API to keep user sessions, carts, and inventory consistent.</li>
              </ul>
            </div>

            {/* Project 2: AI Messenger Bot */}
            <div className="space-y-2 mb-4 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white">CommerceBot AI — Meta Messenger Sales &amp; Logistics Agent</h3>
                <span className="text-[11px] font-mono text-emerald-400">Production Live</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 leading-relaxed">
                <li>Connected Facebook Developer Graph Webhooks to an automated buyer support agent delivering sub-420ms responses.</li>
                <li>Built real-time SQL catalog search querying products based on natural language buyer preferences (size, color, price).</li>
                <li>Engineered direct REST courier logistics dispatch (Steadfast/Pathao), auto-booking shipping parcels and generating tracking codes.</li>
                <li>Designed an automated failover circuit breaker that switches to secondary AI models if the primary connection drops.</li>
              </ul>
            </div>

            {/* Project 3: Flutter Mobile App */}
            <div className="space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white">StorePulse Mobile — Cross-Platform Flutter App (iOS &amp; Android)</h3>
                <span className="text-[11px] font-mono text-emerald-400">Production Ready</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 leading-relaxed">
                <li>Engineered a native cross-platform companion application using Flutter 3.x and Dart for mobile merchants on iOS and Android.</li>
                <li>Implemented offline-first caching using Hive database with automatic background synchronization upon network reconnection.</li>
                <li>Integrated Firebase Cloud Messaging (FCM) for low-latency order push notifications and live courier tracking updates.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Candidate: Rowshanara Akhter · Full-Stack Web &amp; Mobile Flutter Engineer</span>
          <button
            onClick={onClose}
            className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-white rounded font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
