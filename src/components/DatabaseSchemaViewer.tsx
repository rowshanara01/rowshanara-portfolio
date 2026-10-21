import React, { useState } from 'react';
import { Database, Key, Link2, ShieldCheck, Copy, Check, Table, Layers, ArrowRight } from 'lucide-react';

interface ColumnDef {
  name: string;
  type: string;
  isPk?: boolean;
  isFk?: boolean;
  fkTarget?: string;
  isIndexed?: boolean;
  description: string;
}

interface TableDef {
  id: string;
  name: string;
  category: 'Tenancy' | 'Catalog' | 'Commerce' | 'Logistics' | 'AI Agent';
  rowCountEstimate: string;
  description: string;
  columns: ColumnDef[];
  sqlDdl: string;
}

export const DatabaseSchemaViewer: React.FC = () => {
  const [selectedTableId, setSelectedTableId] = useState<string>('orders');
  const [viewMode, setViewMode] = useState<'visual' | 'sql'>('visual');
  const [copied, setCopied] = useState(false);

  const tables: TableDef[] = [
    {
      id: 'tenants',
      name: 'tenants',
      category: 'Tenancy',
      rowCountEstimate: '1,200+ orgs',
      description: 'Isolates e-commerce storefronts, tracks 15/30-day domain trial expirations, and binds Stripe subscriptions.',
      columns: [
        { name: 'id', type: 'UUID', isPk: true, description: 'Unique tenant identifier (Primary Key)' },
        { name: 'subdomain', type: 'VARCHAR(64)', isIndexed: true, description: 'Store slug (e.g. stylehub.storepulse.app)' },
        { name: 'custom_domain', type: 'VARCHAR(128)', description: 'Custom domain alias with auto SSL' },
        { name: 'trial_started_at', type: 'TIMESTAMPTZ', description: 'Timestamp when free trial began' },
        { name: 'trial_expires_at', type: 'TIMESTAMPTZ', isIndexed: true, description: 'Automated 15/30-day expiry threshold' },
        { name: 'subscription_status', type: 'ENUM', description: "'trialing' | 'active' | 'past_due' | 'locked'" },
        { name: 'stripe_customer_id', type: 'VARCHAR(128)', description: 'Stripe customer reference' },
        { name: 'created_at', type: 'TIMESTAMPTZ', description: 'Record creation timestamp' },
      ],
      sqlDdl: `CREATE TABLE tenants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  subdomain VARCHAR(64) UNIQUE NOT NULL,
  custom_domain VARCHAR(128) UNIQUE,
  trial_started_at TIMESTAMPTZ DEFAULT NOW(),
  trial_expires_at TIMESTAMPTZ NOT NULL,
  subscription_status VARCHAR(24) DEFAULT 'trialing',
  stripe_customer_id VARCHAR(128),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_tenants_trial_expiry ON tenants(trial_expires_at, subscription_status);`,
    },
    {
      id: 'products',
      name: 'products',
      category: 'Catalog',
      rowCountEstimate: '85,000+ items',
      description: 'Merchant product catalog queried by the Facebook Messenger AI bot and web storefront with Row-Level Security.',
      columns: [
        { name: 'id', type: 'UUID', isPk: true, description: 'Unique product ID' },
        { name: 'tenant_id', type: 'UUID', isFk: true, fkTarget: 'tenants.id', isIndexed: true, description: 'Foreign key to parent tenant store' },
        { name: 'sku', type: 'VARCHAR(64)', isIndexed: true, description: 'Stock Keeping Unit (e.g. TEE-BLK-L)' },
        { name: 'title', type: 'VARCHAR(255)', description: 'Product title in English & Bengali' },
        { name: 'price', type: 'NUMERIC(10,2)', description: 'Unit price in BDT' },
        { name: 'stock_quantity', type: 'INTEGER', description: 'Available warehouse stock' },
        { name: 'category', type: 'VARCHAR(64)', isIndexed: true, description: 'Product category' },
        { name: 'is_active', type: 'BOOLEAN', description: 'Visibility toggle' },
      ],
      sqlDdl: `CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE,
  sku VARCHAR(64) NOT NULL,
  title VARCHAR(255) NOT NULL,
  price NUMERIC(10,2) NOT NULL,
  stock_quantity INTEGER NOT NULL DEFAULT 0,
  category VARCHAR(64),
  is_active BOOLEAN DEFAULT TRUE
);

-- Row-Level Security for multi-tenant isolation
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
CREATE POLICY tenant_isolation_policy ON products
  FOR ALL USING (tenant_id = current_setting('app.current_tenant_id')::UUID);

CREATE INDEX idx_products_tenant_sku ON products(tenant_id, sku);`,
    },
    {
      id: 'orders',
      name: 'orders',
      category: 'Commerce',
      rowCountEstimate: '14,200+ orders',
      description: 'E-commerce orders generated via both storefront checkout and automated Facebook Messenger chat flows.',
      columns: [
        { name: 'id', type: 'VARCHAR(32)', isPk: true, description: 'Human-friendly order ID (e.g. ORD-892104)' },
        { name: 'tenant_id', type: 'UUID', isFk: true, fkTarget: 'tenants.id', isIndexed: true, description: 'Store tenant reference' },
        { name: 'customer_name', type: 'VARCHAR(128)', description: 'Validated customer full name' },
        { name: 'phone', type: 'VARCHAR(20)', isIndexed: true, description: 'Regex-validated phone (Zod schema enforced)' },
        { name: 'delivery_address', type: 'TEXT', description: 'Full shipping destination address' },
        { name: 'total_amount', type: 'NUMERIC(10,2)', description: 'Total payable amount in BDT' },
        { name: 'payment_method', type: 'VARCHAR(32)', description: "'COD' | 'bKash' | 'Stripe'" },
        { name: 'order_status', type: 'VARCHAR(32)', isIndexed: true, description: "'confirmed' | 'dispatched' | 'delivered'" },
      ],
      sqlDdl: `CREATE TABLE orders (
  id VARCHAR(32) PRIMARY KEY,
  tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE,
  customer_name VARCHAR(128) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  delivery_address TEXT NOT NULL,
  total_amount NUMERIC(10,2) NOT NULL,
  payment_method VARCHAR(32) DEFAULT 'COD',
  order_status VARCHAR(32) DEFAULT 'confirmed',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_orders_tenant_status ON orders(tenant_id, order_status, created_at DESC);`,
    },
    {
      id: 'courier_consignments',
      name: 'courier_consignments',
      category: 'Logistics',
      rowCountEstimate: '11,800+ parcels',
      description: 'Stores parcel tracking data auto-generated via direct Steadfast & Pathao Courier REST API webhooks.',
      columns: [
        { name: 'id', type: 'UUID', isPk: true, description: 'Internal consignment UUID' },
        { name: 'order_id', type: 'VARCHAR(32)', isFk: true, fkTarget: 'orders.id', isIndexed: true, description: 'Linked e-commerce order' },
        { name: 'courier_provider', type: 'VARCHAR(32)', description: "'Steadfast' | 'Pathao' | 'RedX'" },
        { name: 'tracking_code', type: 'VARCHAR(64)', isIndexed: true, description: 'Live parcel tracking code (e.g. STD-891042)' },
        { name: 'consignment_status', type: 'VARCHAR(32)', description: "'booked' | 'in_transit' | 'delivered'" },
        { name: 'cod_amount', type: 'NUMERIC(10,2)', description: 'Cash on delivery collect amount' },
        { name: 'dispatched_at', type: 'TIMESTAMPTZ', description: 'Timestamp parcel was handed to courier' },
      ],
      sqlDdl: `CREATE TABLE courier_consignments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id VARCHAR(32) REFERENCES orders(id) ON DELETE RESTRICT,
  courier_provider VARCHAR(32) NOT NULL,
  tracking_code VARCHAR(64) UNIQUE NOT NULL,
  consignment_status VARCHAR(32) DEFAULT 'booked',
  cod_amount NUMERIC(10,2) NOT NULL,
  dispatched_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_consignments_tracking ON courier_consignments(tracking_code);`,
    },
    {
      id: 'ai_conversations',
      name: 'ai_conversations',
      category: 'AI Agent',
      rowCountEstimate: '62,000+ threads',
      description: 'Stores Meta Messenger webhook message history, sliding window conversational buffer, and failover router logs.',
      columns: [
        { name: 'id', type: 'UUID', isPk: true, description: 'Thread identifier' },
        { name: 'sender_psid', type: 'VARCHAR(64)', isIndexed: true, description: 'Facebook Page-Scoped User ID (PSID)' },
        { name: 'tenant_id', type: 'UUID', isFk: true, fkTarget: 'tenants.id', description: 'Store owner page binding' },
        { name: 'last_intent', type: 'VARCHAR(64)', description: 'Catalog search vs order confirmation' },
        { name: 'failover_triggered', type: 'BOOLEAN', description: 'True if backup API took over' },
        { name: 'latency_ms', type: 'INTEGER', description: 'Round-trip message latency in ms' },
        { name: 'updated_at', type: 'TIMESTAMPTZ', isIndexed: true, description: 'Timestamp of latest interaction' },
      ],
      sqlDdl: `CREATE TABLE ai_conversations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sender_psid VARCHAR(64) NOT NULL,
  tenant_id UUID REFERENCES tenants(id),
  last_intent VARCHAR(64),
  failover_triggered BOOLEAN DEFAULT FALSE,
  latency_ms INTEGER,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_conversations_sender ON ai_conversations(sender_psid, tenant_id);`,
    },
  ];

  const currentTable = tables.find((t) => t.id === selectedTableId) || tables[0];

  const handleCopySql = () => {
    navigator.clipboard.writeText(currentTable.sqlDdl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="database-design" className="py-16 md:py-24 px-4 md:px-8 max-w-6xl mx-auto border-b border-slate-800/80">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
            <span>DATABASE ARCHITECTURE &amp; DATA MODELING</span>
            <span aria-hidden="true">·</span>
            <span>POSTGRESQL RELATIONAL SCHEMAS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Database Architecture &amp; ERD Schemas
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
            Normalized PostgreSQL schemas powering multi-tenant storefronts, Row-Level Security (RLS) data isolation, and automated courier consignment dispatch.
          </p>
        </div>

        {/* View mode toggle */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg shrink-0">
          <button
            onClick={() => setViewMode('visual')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              viewMode === 'visual'
                ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Visual Schema
          </button>
          <button
            onClick={() => setViewMode('sql')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              viewMode === 'sql'
                ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            PostgreSQL DDL
          </button>
        </div>
      </div>

      {/* Table Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-6">
        {tables.map((t) => (
          <button
            key={t.id}
            onClick={() => setSelectedTableId(t.id)}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all shrink-0 flex items-center gap-2 border ${
              selectedTableId === t.id
                ? 'bg-cyan-950/80 text-cyan-300 border-cyan-400/80 shadow-md ring-1 ring-cyan-400/20'
                : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
            }`}
          >
            <Table className="w-3.5 h-3.5" />
            <span>public.{t.name}</span>
            <span className="text-[10px] text-slate-500">({t.category})</span>
          </button>
        ))}
      </div>

      {/* Main Table Inspector Box */}
      <div className="bg-slate-900/70 border border-slate-800 rounded-2xl overflow-hidden">
        {/* Table Summary Header */}
        <div className="p-6 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="text-base sm:text-lg font-bold font-mono text-white">
                public.{currentTable.name}
              </span>
              <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                {currentTable.category}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Est: {currentTable.rowCountEstimate}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              {currentTable.description}
            </p>
          </div>

          {viewMode === 'sql' && (
            <button
              onClick={handleCopySql}
              className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono font-medium rounded-lg flex items-center gap-1.5 transition-colors border border-slate-700"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied SQL' : 'Copy DDL'}</span>
            </button>
          )}
        </div>

        {/* Visual Columns Table Mode */}
        {viewMode === 'visual' ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-950/70 border-b border-slate-800 text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  <th className="py-3 px-4 sm:px-6">Column Name</th>
                  <th className="py-3 px-4">Data Type</th>
                  <th className="py-3 px-4">Key / Index Constraints</th>
                  <th className="py-3 px-4 sm:px-6">Description &amp; Engineering Role</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 font-mono text-[12px]">
                {currentTable.columns.map((col, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                    {/* Name */}
                    <td className="py-3 px-4 sm:px-6 font-semibold text-white flex items-center gap-2">
                      {col.isPk && <span title="Primary Key"><Key className="w-3 h-3 text-amber-400 shrink-0" /></span>}
                      {col.isFk && <span title="Foreign Key"><Link2 className="w-3 h-3 text-cyan-400 shrink-0" /></span>}
                      <span>{col.name}</span>
                    </td>

                    {/* Type */}
                    <td className="py-3 px-4 text-cyan-300 font-bold">
                      {col.type}
                    </td>

                    {/* Constraints */}
                    <td className="py-3 px-4">
                      {col.isPk && (
                        <span className="text-[10px] bg-amber-950/80 text-amber-300 border border-amber-800 px-1.5 py-0.5 rounded mr-1">
                          PRIMARY KEY
                        </span>
                      )}
                      {col.isFk && (
                        <span className="text-[10px] bg-cyan-950/80 text-cyan-300 border border-cyan-800 px-1.5 py-0.5 rounded mr-1">
                          FK ➔ {col.fkTarget}
                        </span>
                      )}
                      {col.isIndexed && !col.isPk && (
                        <span className="text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded">
                          BTREE INDEX
                        </span>
                      )}
                      {!col.isPk && !col.isFk && !col.isIndexed && (
                        <span className="text-slate-600">—</span>
                      )}
                    </td>

                    {/* Description */}
                    <td className="py-3 px-4 sm:px-6 font-sans text-xs text-slate-300">
                      {col.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          /* PostgreSQL DDL Code Mode */
          <div className="p-6 bg-slate-950 font-mono text-xs overflow-x-auto">
            <pre className="text-cyan-200 leading-relaxed">
              {currentTable.sqlDdl}
            </pre>
          </div>
        )}

        {/* Database Key Takeaways Footer */}
        <div className="p-4 bg-slate-950/90 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Row-Level Security (RLS) &amp; Foreign Key Constraints Enforced</span>
          </div>
          <span className="text-cyan-400">Sub-20ms Indexed Queries</span>
        </div>
      </div>
    </section>
  );
};
