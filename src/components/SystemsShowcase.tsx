import React, { useState } from 'react';
import { 
  Play, 
  ExternalLink, 
  Github, 
  Layers, 
  Store, 
  Bot, 
  Smartphone,
  CheckCircle2, 
  Sparkles, 
  X,
  Truck,
  ShieldCheck,
  CreditCard
} from 'lucide-react';
import { AiChatbotSimulator } from './AiChatbotSimulator';
import { SaasDashboardSimulator } from './SaasDashboardSimulator';
import { FlutterMobileSimulator } from './FlutterMobileSimulator';

export const SystemsShowcase: React.FC = () => {
  const [activeSimulator, setActiveSimulator] = useState<'saas' | 'chatbot' | 'mobile' | null>(null);

  return (
    <section id="systems" className="py-16 md:py-24 px-4 md:px-8 max-w-6xl mx-auto border-b border-slate-800/80">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
          <span>FEATURED PRODUCTION SYSTEMS</span>
          <span aria-hidden="true">·</span>
          <span>WEB, AI AGENTS &amp; MOBILE (FLUTTER)</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold font-display text-white tracking-tight">
          Production Systems &amp; Case Studies
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
          Deep architectural implementations spanning multi-tenant web SaaS, autonomous social commerce AI bots, and cross-platform Flutter mobile applications.
        </p>
      </div>

      <div className="space-y-16">
        {/* System 1: StorePulse E-Commerce SaaS */}
        <article className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700/80 transition-colors">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual & Simulator Trigger Column */}
            <div className="lg:col-span-5 bg-slate-950 p-6 md:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                  <Store className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
                  <span>PRODUCTION LIVE</span>
                  <span aria-hidden="true">·</span>
                  <span>MULTI-TENANT SAAS</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  StorePulse SaaS
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  E-Commerce Storefront Engine with 15/30-Day Domain Trial &amp; Subscription Gating
                </p>
              </div>

              {/* In-Card Interactive Sandbox Preview */}
              <div className="mt-8 pt-6 border-t border-slate-800/80">
                <div className="text-xs font-medium text-slate-300 mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Interactive Sandbox Deployed</span>
                </div>
                <p className="text-xs text-slate-400 mb-4">
                  Test the store order desk, trial expiration countdown, and live payload error-handling in your browser.
                </p>
                <button
                  onClick={() => setActiveSimulator('saas')}
                  className="w-full py-2.5 px-4 bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-all shadow-sm active:scale-98"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Launch Interactive SaaS Sandbox</span>
                </button>
              </div>
            </div>

            {/* Deep Technical Case Study Column */}
            <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between">
              <div>
                {/* The Challenge */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1 font-mono">
                    The Engineering Challenge
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Online merchants were experiencing silent customer checkout dropouts caused by unvalidated form payload schemas, browser session desynchronization across multiple open tabs, and manual friction in transitioning 15-day free trial stores to paid recurring tiers.
                  </p>
                </div>

                {/* The Engineered Solution */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1 font-mono">
                    Engineered Solution &amp; Fixes
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Built an end-to-end multi-tenant platform with Zod schema validation guards that eliminate data submit drops, BroadcastChannel cross-tab state listeners that keep shopping carts synchronized, and an automated trial lifecycle worker that gracefully gates store features upon trial expiry.
                  </p>
                </div>

                {/* Quantitative Impact */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-slate-800/80 my-4">
                  <div>
                    <div className="text-lg font-bold font-mono text-cyan-400 tabular-nums">99.96%</div>
                    <div className="text-[11px] text-slate-400">Data Submit Rate</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold font-mono text-emerald-400 tabular-nums">42.8%</div>
                    <div className="text-[11px] text-slate-400">Trial Conversion</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold font-mono text-white tabular-nums">15/30 Days</div>
                    <div className="text-[11px] text-slate-400">Free Domain Trial</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold font-mono text-cyan-400 tabular-nums">0 Drops</div>
                    <div className="text-[11px] text-slate-400">Cross-Tab Crashes</div>
                  </div>
                </div>

                {/* Architecture Highlights */}
                <div className="space-y-1.5 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span><strong>Payload Integrity:</strong> Zod runtime schema validation on every checkout request.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span><strong>Browser Resilience:</strong> BroadcastChannel API synchronizing state across active tabs.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span><strong>Subscription Lifecycle:</strong> Automated custom domain provisioning and expiry cron.</span>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-8 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-slate-400">
                  <span className="text-slate-500 font-sans">Stack:</span>
                  <span>React 19</span>
                  <span className="text-slate-600">·</span>
                  <span>TypeScript</span>
                  <span className="text-slate-600">·</span>
                  <span>Node.js</span>
                  <span className="text-slate-600">·</span>
                  <span>PostgreSQL</span>
                  <span className="text-slate-600">·</span>
                  <span>Zod</span>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono">
                  <button
                    onClick={() => setActiveSimulator('saas')}
                    className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1"
                  >
                    <span>Launch Sandbox</span>
                    <Play className="w-3 h-3 fill-current" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* System 2: CommerceBot AI (Meta Messenger & Courier) */}
        <article className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700/80 transition-colors">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual & Simulator Trigger Column */}
            <div className="lg:col-span-5 bg-slate-950 p-6 md:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
                  <Bot className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-1">
                  <span>PRODUCTION LIVE</span>
                  <span aria-hidden="true">·</span>
                  <span>META GRAPH API &amp; COURIER</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  CommerceBot AI
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Autonomous Messenger Sales Agent with SQL Catalog Search &amp; Courier Logistics
                </p>
              </div>

              {/* In-Card Interactive Sandbox Preview */}
              <div className="mt-8 pt-6 border-t border-slate-800/80">
                <div className="text-xs font-medium text-slate-300 mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Interactive Messenger Sandbox</span>
                </div>
                <p className="text-xs text-slate-400 mb-4">
                  Test conversational catalog product search, automated courier tracking booking, and API failover switching.
                </p>
                <button
                  onClick={() => setActiveSimulator('chatbot')}
                  className="w-full py-2.5 px-4 bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-all shadow-sm active:scale-98"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Launch Messenger &amp; Courier Sandbox</span>
                </button>
              </div>
            </div>

            {/* Deep Technical Case Study Column */}
            <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between">
              <div>
                {/* The Challenge */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1 font-mono">
                    The Engineering Challenge
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Social commerce stores lost over 60% of interested buyers due to high message dispatch latency, manual warehouse inventory lookups, and AI connection dropouts during high-volume advertising campaigns.
                  </p>
                </div>

                {/* The Engineered Solution */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1 font-mono">
                    Engineered Solution &amp; Fixes
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Designed a resilient Meta Developer Messenger webhook pipeline with message queueing to slash latency, real-time SQL catalog query filtering, automated courier consignment API booking (Steadfast/Pathao), and an automated failover router that switches to a secondary AI provider if the primary connection drops.
                  </p>
                </div>

                {/* Quantitative Impact */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-slate-800/80 my-4">
                  <div>
                    <div className="text-lg font-bold font-mono text-cyan-400 tabular-nums">&lt; 420ms</div>
                    <div className="text-[11px] text-slate-400">Response Latency</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold font-mono text-emerald-400 tabular-nums">99.98%</div>
                    <div className="text-[11px] text-slate-400">Failover Uptime</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold font-mono text-white tabular-nums">78.5%</div>
                    <div className="text-[11px] text-slate-400">Automated Orders</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold font-mono text-cyan-400 tabular-nums">100%</div>
                    <div className="text-[11px] text-slate-400">Auto Courier Dispatch</div>
                  </div>
                </div>

                {/* Architecture Highlights */}
                <div className="space-y-1.5 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span><strong>Meta Webhook Engine:</strong> Signature-verified Facebook Graph API ingress.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span><strong>Logistics Automation:</strong> Direct REST API integration with Steadfast &amp; Pathao Courier.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span><strong>Zero-Downtime Failover:</strong> Auto-switching backup AI endpoint when primary disconnects.</span>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-8 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-slate-400">
                  <span className="text-slate-500 font-sans">Stack:</span>
                  <span>Meta Graph API</span>
                  <span className="text-slate-600">·</span>
                  <span>Node.js</span>
                  <span className="text-slate-600">·</span>
                  <span>PostgreSQL</span>
                  <span className="text-slate-600">·</span>
                  <span>Gemini/OpenAI</span>
                  <span className="text-slate-600">·</span>
                  <span>Courier APIs</span>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono">
                  <button
                    onClick={() => setActiveSimulator('chatbot')}
                    className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1"
                  >
                    <span>Launch Sandbox</span>
                    <Play className="w-3 h-3 fill-current" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* System 3: StorePulse Merchant — Cross-Platform Flutter Mobile App */}
        <article className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700/80 transition-colors">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual & Simulator Trigger Column */}
            <div className="lg:col-span-5 bg-slate-950 p-6 md:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                  <span>PRODUCTION READY</span>
                  <span aria-hidden="true">·</span>
                  <span>FLUTTER &amp; DART (IOS/ANDROID)</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  StorePulse Mobile
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Cross-Platform Merchant Operations App with Offline Hive Storage &amp; Live Tracking
                </p>
              </div>

              {/* In-Card Interactive Sandbox Preview */}
              <div className="mt-8 pt-6 border-t border-slate-800/80">
                <div className="text-xs font-medium text-slate-300 mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Interactive Flutter Sandbox</span>
                </div>
                <p className="text-xs text-slate-400 mb-4">
                  Test the responsive mobile app UI directly in your browser: live orders, stock counts, and courier tracking.
                </p>
                <button
                  onClick={() => setActiveSimulator('mobile')}
                  className="w-full py-2.5 px-4 bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-all shadow-sm active:scale-98"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Launch Mobile Flutter Simulator</span>
                </button>
              </div>
            </div>

            {/* Technical Case Study Column */}
            <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1 font-mono">
                    The Engineering Challenge
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    E-commerce merchants frequently lose sales while away from desktop workstations due to delayed order fulfillment, lack of instant push alerts, and poor internet connectivity causing web apps to freeze.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1 font-mono">
                    Engineered Solution &amp; Fixes
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Built a unified Flutter 3.x companion mobile app with Riverpod state management, offline-first local Hive caching for seamless operation during network drops, Firebase Cloud Messaging (FCM) background alerts, and real-time courier shipment status feeds.
                  </p>
                </div>

                {/* Quantitative Impact */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-slate-800/80 my-4">
                  <div>
                    <div className="text-lg font-bold font-mono text-cyan-400 tabular-nums">60 FPS</div>
                    <div className="text-[11px] text-slate-400">Smooth Rendering</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold font-mono text-emerald-400 tabular-nums">100%</div>
                    <div className="text-[11px] text-slate-400">Shared Codebase</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold font-mono text-white tabular-nums">&lt; 14 MB</div>
                    <div className="text-[11px] text-slate-400">Release APK Size</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold font-mono text-cyan-400 tabular-nums">0ms</div>
                    <div className="text-[11px] text-slate-400">Offline Hive Lag</div>
                  </div>
                </div>

                {/* Architecture Highlights */}
                <div className="space-y-1.5 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span><strong>Unified Flutter Code:</strong> Single codebase targeting both iOS and Android stores.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span><strong>Offline-First Resilience:</strong> Hive key-value database caching with background sync.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span><strong>Real-Time Courier Sync:</strong> Instant push alerts for package pickup and delivery confirmation.</span>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-8 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-slate-400">
                  <span className="text-slate-500 font-sans">Stack:</span>
                  <span>Flutter 3.x</span>
                  <span className="text-slate-600">·</span>
                  <span>Dart</span>
                  <span className="text-slate-600">·</span>
                  <span>Riverpod</span>
                  <span className="text-slate-600">·</span>
                  <span>Hive Storage</span>
                  <span className="text-slate-600">·</span>
                  <span>Firebase FCM</span>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono">
                  <button
                    onClick={() => setActiveSimulator('mobile')}
                    className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1"
                  >
                    <span>Launch Simulator</span>
                    <Play className="w-3 h-3 fill-current" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* Fullscreen Interactive Modal for In-Browser Sandbox */}
      {activeSimulator && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-4xl max-h-[92vh] overflow-hidden flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-150">
            <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <span>
                    {activeSimulator === 'saas'
                      ? 'StorePulse SaaS: Live Store & Trial Sandbox'
                      : activeSimulator === 'chatbot'
                      ? 'CommerceBot AI: Live Meta Messenger & Courier Booking Sandbox'
                      : 'StorePulse Mobile: Flutter 3.x Mobile App Simulator'}
                  </span>
                  <span className="text-xs font-mono text-cyan-400 font-normal">
                    [In-Browser Interactive Test]
                  </span>
                </h4>
                <p className="text-xs text-slate-400">
                  {activeSimulator === 'saas'
                    ? 'Test live orders, 15-day trial countdown, and payload error handling'
                    : activeSimulator === 'chatbot'
                    ? 'Test product search, automatic courier parcel generation, and AI failover'
                    : 'Test the Flutter mobile interface, orders feed, stock counters, and courier map'}
                </p>
              </div>

              <button
                onClick={() => setActiveSimulator(null)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                title="Close Sandbox"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 md:p-6 overflow-y-auto">
              {activeSimulator === 'saas' ? (
                <SaasDashboardSimulator language="en" />
              ) : activeSimulator === 'chatbot' ? (
                <AiChatbotSimulator language="en" />
              ) : (
                <FlutterMobileSimulator />
              )}
            </div>

            <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Status: Active Sandbox Session</span>
              <button
                onClick={() => setActiveSimulator(null)}
                className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-white rounded font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
