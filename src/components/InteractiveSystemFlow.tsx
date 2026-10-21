import React, { useState } from 'react';
import { 
  Play, 
  CheckCircle2, 
  Terminal, 
  Database, 
  Bot, 
  Truck, 
  ShieldCheck, 
  ArrowRight,
  Zap,
  RefreshCw,
  Cpu
} from 'lucide-react';

interface PipelineNode {
  id: string;
  name: string;
  category: string;
  latency: string;
  status: 'idle' | 'processing' | 'completed' | 'failover';
  description: string;
  payload: Record<string, any>;
}

export const InteractiveSystemFlow: React.FC = () => {
  const [pipelineType, setPipelineType] = useState<'courier' | 'saas'>('courier');
  const [activeStep, setActiveStep] = useState<number>(-1);
  const [isSimulating, setIsSimulating] = useState(false);
  const [selectedNode, setSelectedNode] = useState<string>('meta-webhook');

  const courierNodes: PipelineNode[] = [
    {
      id: 'meta-webhook',
      name: 'Meta Ingress Webhook',
      category: 'Ingress & Security',
      latency: '24ms',
      status: activeStep >= 0 ? (activeStep === 0 ? 'processing' : 'completed') : 'idle',
      description: 'HMAC-SHA256 signature verification & message queue throttling.',
      payload: {
        event: 'messages',
        senderId: 'fb_user_894102',
        message: 'Looking for Black Cotton Shirt Size L',
        verified: true,
      },
    },
    {
      id: 'sql-catalog',
      name: 'SQL Catalog Lookup',
      category: 'PostgreSQL Database',
      latency: '45ms',
      status: activeStep >= 1 ? (activeStep === 1 ? 'processing' : 'completed') : 'idle',
      description: 'Indexed product query matching category, in-stock quantity, and pricing.',
      payload: {
        query: 'SELECT * FROM products WHERE sku LIKE "TEE-BLK%" AND stock > 0',
        matchedItems: 3,
        selectedSku: 'TEE-BLK-L',
        price: '৳550 BDT',
      },
    },
    {
      id: 'ai-failover',
      name: 'AI Reasoning & Failover',
      category: 'Circuit Breaker Core',
      latency: '180ms',
      status: activeStep >= 2 ? (activeStep === 2 ? 'processing' : 'completed') : 'idle',
      description: 'Generates natural buyer response with automatic fallback to secondary API if primary drops.',
      payload: {
        primaryStatus: 'HEALTHY',
        fallbackArmed: true,
        responseIntent: 'ORDER_INTENT_CONFIRMED',
        firstTokenTime: '180ms',
      },
    },
    {
      id: 'courier-dispatch',
      name: 'Courier REST Gateway',
      category: 'Steadfast / Pathao API',
      latency: '85ms',
      status: activeStep >= 3 ? (activeStep === 3 ? 'processing' : 'completed') : 'idle',
      description: 'Auto-generates parcel consignment slip & returns real-time tracking code to Messenger.',
      payload: {
        courier: 'Steadfast Logistics',
        consignmentId: 'STD-998241',
        parcelStatus: 'BOOKED_FOR_PICKUP',
        trackingUrl: 'https://track.courier.app/STD-998241',
      },
    },
  ];

  const saasNodes: PipelineNode[] = [
    {
      id: 'tenant-signup',
      name: 'Merchant Provisioning',
      category: 'SaaS Workspace',
      latency: '35ms',
      status: activeStep >= 0 ? (activeStep === 0 ? 'processing' : 'completed') : 'idle',
      description: 'Automates custom subdomain allocation and isolated PostgreSQL tenant schema.',
      payload: {
        tenant: 'storehub.storepulse.app',
        customDomainStatus: 'DNS_PROPAGATING',
        tier: '15_DAY_FREE_TRIAL',
      },
    },
    {
      id: 'zod-validator',
      name: 'Zod Payload Sanitizer',
      category: 'Data Integrity Gate',
      latency: '8ms',
      status: activeStep >= 1 ? (activeStep === 1 ? 'processing' : 'completed') : 'idle',
      description: 'Catches missing country codes and malformed inputs, eliminating silent checkout failures.',
      payload: {
        schema: 'OrderPayloadSchema',
        inputStatus: 'VALIDATED_100_PERCENT',
        droppedSubmissions: 0,
      },
    },
    {
      id: 'broadcast-sync',
      name: 'Cross-Tab Event Bus',
      category: 'BroadcastChannel API',
      latency: '4ms',
      status: activeStep >= 2 ? (activeStep === 2 ? 'processing' : 'completed') : 'idle',
      description: 'Synchronizes active carts, tokens, and store inventory across multiple browser tabs.',
      payload: {
        activeTabs: 3,
        channel: 'store_sync_bus',
        syncLatency: '3.8ms',
      },
    },
    {
      id: 'subscription-gate',
      name: 'Trial Expiry & Billing Gate',
      category: 'Stripe Cron Worker',
      latency: '60ms',
      status: activeStep >= 3 ? (activeStep === 3 ? 'processing' : 'completed') : 'idle',
      description: '15/30-day cron counter that gates storefront checkouts until subscription renewal.',
      payload: {
        trialDaysRemaining: 4,
        stripePortal: 'READY',
        autoLockOnDay: 15,
      },
    },
  ];

  const currentNodes = pipelineType === 'courier' ? courierNodes : saasNodes;
  const activeNodeData = currentNodes.find((n) => n.id === selectedNode) || currentNodes[0];

  const handleSimulate = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setActiveStep(0);
    setSelectedNode(currentNodes[0].id);

    const stepDuration = 550;
    setTimeout(() => {
      setActiveStep(1);
      setSelectedNode(currentNodes[1].id);
    }, stepDuration);

    setTimeout(() => {
      setActiveStep(2);
      setSelectedNode(currentNodes[2].id);
    }, stepDuration * 2);

    setTimeout(() => {
      setActiveStep(3);
      setSelectedNode(currentNodes[3].id);
    }, stepDuration * 3);

    setTimeout(() => {
      setIsSimulating(false);
    }, stepDuration * 4);
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 max-w-6xl mx-auto border-b border-slate-800/80">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
            <span>LIVE INTERACTIVE ARCHITECTURE SIMULATOR</span>
            <span aria-hidden="true">·</span>
            <span>END-TO-END DATAFLOW</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Interactive System Flow
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
            Click &quot;Simulate Live Request&quot; to trace a payload through my production pipeline. Inspect node latencies and live schema state at each step.
          </p>
        </div>

        {/* Pipeline Toggle */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg shrink-0">
          <button
            onClick={() => {
              setPipelineType('courier');
              setActiveStep(-1);
              setSelectedNode('meta-webhook');
            }}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              pipelineType === 'courier'
                ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Meta Messenger ➔ Courier Flow
          </button>
          <button
            onClick={() => {
              setPipelineType('saas');
              setActiveStep(-1);
              setSelectedNode('tenant-signup');
            }}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              pipelineType === 'saas'
                ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            SaaS Trial ➔ Zod Validation Flow
          </button>
        </div>
      </div>

      {/* Main Visualizer Container */}
      <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8">
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <button
              onClick={handleSimulate}
              disabled={isSimulating}
              className="px-4 py-2 bg-cyan-400 hover:bg-cyan-300 disabled:opacity-50 text-slate-950 text-xs sm:text-sm font-semibold rounded-lg flex items-center gap-2 transition-all shadow-sm active:scale-95"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{isSimulating ? 'Processing Packet...' : 'Simulate Live Request'}</span>
            </button>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">
              Total Pipeline Latency: <strong className="text-cyan-400">~334ms</strong>
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>All Nodes Operational (Zero Drops)</span>
          </div>
        </div>

        {/* 4 Interactive Nodes Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentNodes.map((node, index) => {
            const isCurrent = activeStep === index;
            const isDone = activeStep > index;
            const isSelected = selectedNode === node.id;

            return (
              <div
                key={node.id}
                onClick={() => setSelectedNode(node.id)}
                className={`p-4 rounded-xl border transition-all cursor-pointer select-none flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-950 border-cyan-400 shadow-md ring-1 ring-cyan-400/30'
                    : 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                    <span>STEP 0{index + 1}</span>
                    <span className="text-cyan-400">{node.latency}</span>
                  </div>

                  <h4 className="text-sm font-bold text-white mb-1">
                    {node.name}
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-snug">
                    {node.category}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                      isCurrent
                        ? 'bg-cyan-950 text-cyan-300 border-cyan-800 animate-pulse'
                        : isDone
                        ? 'bg-emerald-950 text-emerald-300 border-emerald-800'
                        : 'bg-slate-900 text-slate-500 border-slate-800'
                    }`}
                  >
                    {isCurrent ? 'PROCESSING' : isDone ? 'VERIFIED 200' : 'STANDBY'}
                  </span>
                  <span className="text-xs text-slate-500">Inspect ➔</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Payload Inspector Drawer */}
        <div className="mt-8 p-5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300">
          <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-800/80">
            <div className="flex items-center gap-2 text-cyan-400 font-semibold">
              <Terminal className="w-4 h-4" />
              <span>Inspecting Node: {activeNodeData.name}</span>
            </div>
            <span className="text-[11px] text-slate-400">
              Execution Time: {activeNodeData.latency}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="text-slate-400 text-[11px] mb-1 font-sans">
                Node Description:
              </div>
              <p className="text-slate-300 text-xs font-sans leading-relaxed">
                {activeNodeData.description}
              </p>
            </div>

            <div>
              <div className="text-slate-400 text-[11px] mb-1">
                Active Payload State (JSON):
              </div>
              <pre className="p-3 bg-slate-900 rounded-lg border border-slate-800/80 text-[11px] text-cyan-200 overflow-x-auto leading-relaxed">
                {JSON.stringify(activeNodeData.payload, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
