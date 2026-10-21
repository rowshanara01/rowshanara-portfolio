import React, { useState } from 'react';
import { Language } from '../types/portfolio';
import { Copy, Check, Sparkles, Layers, FileText, Code2, ArrowRight } from 'lucide-react';

interface CaseStudyBuilderProps {
  language: Language;
}

export const CaseStudyBuilder: React.FC<CaseStudyBuilderProps> = ({ language }) => {
  const [projectType, setProjectType] = useState<'ai' | 'saas'>('ai');
  const [projectName, setProjectName] = useState('CommerceBot AI: Meta Messenger Sales Agent');
  const [problemText, setProblemText] = useState(
    'Social media merchants lost 60% of buyers due to slow Facebook message responses, manual catalog lookups, and AI connection drops during peak traffic.'
  );
  const [solutionText, setSolutionText] = useState(
    'Engineered an autonomous Meta Messenger webhook agent with dynamic database product search, automated courier parcel booking (Steadfast/Pathao), and zero-downtime AI API failover.'
  );
  const [metric1, setMetric1] = useState({ label: 'Message Latency', value: '< 420ms' });
  const [metric2, setMetric2] = useState({ label: 'Auto-Order Booking', value: '78.5%' });
  const [metric3, setMetric3] = useState({ label: 'API Uptime / Failover', value: '99.98%' });
  const [techStackInput, setTechStackInput] = useState('Node.js, Meta Graph API, PostgreSQL, Gemini API, Courier REST API, Redis');
  const [liveUrl, setLiveUrl] = useState('https://persional-website-8fey.vercel.app');
  const [githubUrl, setGithubUrl] = useState('https://github.com/rowshanaraakhter/messenger-ai-commerce-agent');
  const [copied, setCopied] = useState(false);

  const loadTemplate = (type: 'ai' | 'saas') => {
    setProjectType(type);
    if (type === 'ai') {
      setProjectName('CommerceBot AI: Meta Messenger Sales & Courier Agent');
      setProblemText('E-commerce page owners spend hours manually chatting, checking stock in databases, and creating manual courier delivery slips while suffering from API connection drops.');
      setSolutionText('Integrated Facebook Developer Webhooks with real-time SQL catalog search, automatic courier consignment generation, message queuing to cut latency, and automatic failover API switching when primary AI disconnects.');
      setMetric1({ label: 'Response Latency', value: '380ms' });
      setMetric2({ label: 'Catalog Search', value: '96.2%' });
      setMetric3({ label: 'Courier Auto-Dispatch', value: '100% automated' });
      setTechStackInput('Meta Graph API, Node.js, Express, PostgreSQL, Gemini / OpenAI API, Steadfast/Pathao API');
      setGithubUrl('https://github.com/rowshanaraakhter/messenger-ai-commerce-agent');
    } else {
      setProjectName('StorePulse SaaS: E-Commerce Storefront & Subscription Platform');
      setProblemText('Merchants struggled with failed form data submissions, broken sessions across browser tabs, and complex subscription gating after 15/30-day free domain trials.');
      setSolutionText('Architected a multi-tenant SaaS workspace with automated custom domain trials, robust Zod payload sanitization to fix form submit drops, BroadcastChannel cross-tab state synchronization, and automated subscription gating upon trial expiration.');
      setMetric1({ label: 'Data Submit Success', value: '99.96%' });
      setMetric2({ label: 'Trial Conversion', value: '42.8%' });
      setMetric3({ label: 'Cross-Tab Sync', value: '100% Real-time' });
      setTechStackInput('React 19, TypeScript, Node.js Express, PostgreSQL, Stripe API, BroadcastChannel API, Tailwind CSS');
      setGithubUrl('https://github.com/rowshanaraakhter/ecommerce-saas-platform');
    }
  };

  const generatedMarkdown = `# ${projectName}
> ${projectType === 'ai' ? 'Autonomous Facebook Messenger Sales & Courier Agent' : 'Multi-Tenant E-Commerce SaaS with 15/30-Day Domain Trial'}

## 🎯 The Problem & Real Engineering Challenges
${problemText}

## ⚡ The Engineered Solution & Bug Fixes
${solutionText}

## 📊 Key Engineering & Business Metrics
- **${metric1.label}**: ${metric1.value}
- **${metric2.label}**: ${metric2.value}
- **${metric3.label}**: ${metric3.value}

## 🛠️ Tech Stack
${techStackInput.split(',').map(s => `- ${s.trim()}`).join('\n')}

## 🔗 Live Deployed Proof
- **Live Interactive Website**: [${liveUrl}](${liveUrl})
- **GitHub Repository**: [${githubUrl}](${githubUrl})
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedMarkdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
          <span>STAR METHOD CASE STUDY GENERATOR</span>
          <span aria-hidden="true">·</span>
          <span>TAILORED FOR YOUR EXACT PROJECTS</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold font-display text-white tracking-tight">
          {language === 'bn' 
            ? 'আপনার SaaS ও AI চ্যাটবট প্রজেক্টের রিক্রুটার কেস স্টাডি' 
            : 'Recruiter-Ready Case Study Generator for Your Real Projects'}
        </h2>
        <p className="mt-2 text-sm text-slate-400 max-w-3xl leading-relaxed">
          {language === 'bn'
            ? 'আপনার উল্লেখিত বিষয়গুলো (ফেসবুক মেটা ডেভেলপার অ্যাকাউন্ট, ডাটাবেস প্রোডাক্ট সার্চ, কুরিয়ার এপিআই বুকিং, ১৫ দিনের ফ্রি ট্রায়াল ও ডাটা সাবমিট ফিক্স) সরাসরি ফরম্যাট করে দেওয়া হয়েছে।'
            : 'Pre-loaded with your exact engineering challenges: Meta Developer Webhook, SQL catalog search, courier API dispatch, 15-day domain trial, and data submission bug fixes.'}
        </p>
      </div>

      {/* Preset Buttons */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-xs text-slate-400">
          {language === 'bn' ? 'আপনার প্রজেক্ট সিলেক্ট করুন:' : 'Select Your Project:'}
        </span>
        <button
          onClick={() => loadTemplate('ai')}
          className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
            projectType === 'ai'
              ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
              : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-white'
          }`}
        >
          CommerceBot AI (Facebook Messenger &amp; Courier)
        </button>
        <button
          onClick={() => loadTemplate('saas')}
          className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
            projectType === 'saas'
              ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
              : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-white'
          }`}
        >
          StorePulse SaaS (15-Day Trial &amp; Data Submit Fix)
        </button>
      </div>

      {/* Form & Preview Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Input Form */}
        <div className="lg:col-span-6 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h3 className="text-sm font-semibold text-white flex items-center gap-2">
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>{language === 'bn' ? 'প্রজেক্ট প্যারামিটার ও বিবরণ' : 'Project Parameters'}</span>
          </h3>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              {language === 'bn' ? 'প্রজেক্টের নাম' : 'Project Title'}
            </label>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs md:text-sm text-white focus:outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              {language === 'bn' ? 'কী সমস্যা ও জটিল বাগ ছিল? (The Problem & Bugs)' : 'Problem Statement & Bugs Solved'}
            </label>
            <textarea
              rows={3}
              value={problemText}
              onChange={(e) => setProblemText(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs md:text-sm text-white focus:outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              {language === 'bn' ? 'কীভাবে আর্কিটেকচার সমাধান করেছেন? (The Solution)' : 'Engineered Solution'}
            </label>
            <textarea
              rows={3}
              value={solutionText}
              onChange={(e) => setSolutionText(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs md:text-sm text-white focus:outline-none focus:border-cyan-400"
            />
          </div>

          {/* Metrics */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              {language === 'bn' ? 'পরিমাপযোগ্য ফলাফল (Metrics)' : 'Measurable Metrics'}
            </label>
            <div className="grid grid-cols-3 gap-2">
              <div className="space-y-1">
                <input
                  type="text"
                  value={metric1.label}
                  onChange={(e) => setMetric1({ ...metric1, label: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-slate-400"
                />
                <input
                  type="text"
                  value={metric1.value}
                  onChange={(e) => setMetric1({ ...metric1, value: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-cyan-400 font-mono font-bold"
                />
              </div>

              <div className="space-y-1">
                <input
                  type="text"
                  value={metric2.label}
                  onChange={(e) => setMetric2({ ...metric2, label: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-slate-400"
                />
                <input
                  type="text"
                  value={metric2.value}
                  onChange={(e) => setMetric2({ ...metric2, value: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-cyan-400 font-mono font-bold"
                />
              </div>

              <div className="space-y-1">
                <input
                  type="text"
                  value={metric3.label}
                  onChange={(e) => setMetric3({ ...metric3, label: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-slate-400"
                />
                <input
                  type="text"
                  value={metric3.value}
                  onChange={(e) => setMetric3({ ...metric3, value: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-cyan-400 font-mono font-bold"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Tech Stack
            </label>
            <input
              type="text"
              value={techStackInput}
              onChange={(e) => setTechStackInput(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs md:text-sm text-white focus:outline-none focus:border-cyan-400 font-mono"
            />
          </div>
        </div>

        {/* Right: Markdown Preview & Copy */}
        <div className="lg:col-span-6 bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono text-slate-300">
                  {language === 'bn' ? 'GitHub README / Vercel কপি করুন' : 'Rendered Markdown Output'}
                </span>
              </div>
              <button
                onClick={handleCopy}
                className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 flex items-center gap-1.5 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? (language === 'bn' ? 'কপি হয়েছে!' : 'Copied!') : (language === 'bn' ? 'কপি করুন' : 'Copy Markdown')}</span>
              </button>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800 font-mono text-xs text-slate-300 space-y-3 overflow-x-auto leading-relaxed max-h-[380px] overflow-y-auto">
              <div className="text-cyan-400 font-bold text-sm"># {projectName}</div>
              <div className="text-slate-400 italic">
                &gt; {projectType === 'ai' ? 'Autonomous Facebook Messenger Sales & Courier Agent' : 'Multi-Tenant E-Commerce SaaS with 15/30-Day Domain Trial'}
              </div>

              <div className="pt-2">
                <div className="text-white font-semibold">## 🎯 The Problem &amp; Real Engineering Challenges</div>
                <div className="text-slate-300">{problemText}</div>
              </div>

              <div className="pt-2">
                <div className="text-white font-semibold">## ⚡ The Engineered Solution &amp; Bug Fixes</div>
                <div className="text-slate-300">{solutionText}</div>
              </div>

              <div className="pt-2">
                <div className="text-white font-semibold">## 📊 Key Engineering &amp; Business Metrics</div>
                <ul className="list-disc list-inside space-y-1 text-slate-300">
                  <li><strong className="text-cyan-300">{metric1.label}:</strong> {metric1.value}</li>
                  <li><strong className="text-cyan-300">{metric2.label}:</strong> {metric2.value}</li>
                  <li><strong className="text-cyan-300">{metric3.label}:</strong> {metric3.value}</li>
                </ul>
              </div>

              <div className="pt-2">
                <div className="text-white font-semibold">## 🛠️ Tech Stack</div>
                <div className="text-slate-400">{techStackInput}</div>
              </div>

              <div className="pt-2">
                <div className="text-white font-semibold">## 🔗 Live Deployed Proof</div>
                <div>Live: <span className="text-cyan-400 underline">{liveUrl}</span></div>
                <div>Code: <span className="text-cyan-400 underline">{githubUrl}</span></div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400">
            <p>
              💡 <strong>পরামর্শ:</strong> এই লেখাটি আপনার গিটহাবের README.md ফাইলটিতে দিন। ফেসবুক ডেভেলপার অ্যাকাউন্ট, ডাটাবেস সার্চ এবং কুরিয়ার এপিআই বুকিংয়ের মতো বাস্তব অভিজ্ঞতা দেখলে যেকোনো রিক্রুটার বা ক্লায়েন্ট আপনাকে ইন্টারভিউতে ডাকবে।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
