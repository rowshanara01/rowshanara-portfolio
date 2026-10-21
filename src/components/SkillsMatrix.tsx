import React from 'react';
import { Terminal, Database, Bot, Cloud, Smartphone } from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  const domains = [
    {
      title: 'Frontend & State Management',
      icon: Terminal,
      skills: ['React 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS v4', 'Vite', 'BroadcastChannel API', 'Zod Client Validation'],
      description: 'Building responsive, cross-browser resilient web applications with zero layout shift and sub-10ms state synchronization.',
    },
    {
      title: 'Cross-Platform Mobile (Flutter & Dart)',
      icon: Smartphone,
      skills: ['Flutter 3.x', 'Dart', 'Riverpod State Management', 'Hive Offline Storage', 'Firebase Cloud Messaging (FCM)', 'RESTful Mobile Sync'],
      description: 'Deploying unified mobile companion apps for iOS and Android with 60 FPS performance, offline-first caching, and push alerts.',
    },
    {
      title: 'Backend & Data Pipelines',
      icon: Database,
      skills: ['Node.js', 'Express', 'PostgreSQL', 'Prisma / Drizzle ORM', 'Redis Caching', 'RESTful Microservices', 'Row-Level Security (RLS)'],
      description: 'Architecting multi-tenant database schemas, idempotent webhook listeners, and robust data validation layers.',
    },
    {
      title: 'Conversational AI & Integrations',
      icon: Bot,
      skills: ['Meta Messenger Graph API', 'Gemini API', 'OpenAI Models', 'pgvector / Vector Search', 'Circuit-Breaker Failover', 'Prompt Tuning'],
      description: 'Deploying autonomous agents that query relational catalogs, manage conversation memory, and handle API connection drops.',
    },
    {
      title: 'Logistics, SaaS & Deployment',
      icon: Cloud,
      skills: ['Stripe Billing & Subscriptions', 'Steadfast & Pathao Courier APIs', 'Docker', 'Vercel Deployment', 'Git & CI/CD', 'Linux CLI'],
      description: 'End-to-end commercial operations: 15/30-day domain trial lifecycles and automated courier parcel consignment creation.',
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 px-4 md:px-8 max-w-6xl mx-auto border-b border-slate-800/80">
      <div className="mb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
          <span>TECHNICAL SPECIALIZATION</span>
          <span aria-hidden="true">·</span>
          <span>PRODUCTION-TESTED STACK</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold font-display text-white tracking-tight">
          Core Engineering Stack
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
          Technologies and tools I use to build scalable e-commerce systems, cross-platform Flutter mobile apps, and conversational AI agents.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {domains.map((d, idx) => {
          const Icon = d.icon;
          return (
            <div
              key={idx}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-slate-700/80 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-white font-display">
                    {d.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 mb-4 leading-relaxed">
                  {d.description}
                </p>
              </div>

              {/* Zero-Pill Unboxed Text Metadata */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-2 text-xs font-mono">
                {d.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="bg-slate-950 text-slate-300 px-2.5 py-1 rounded border border-slate-800 text-[11px]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
