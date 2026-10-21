import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SystemsShowcase } from './components/SystemsShowcase';
import { InteractiveSystemFlow } from './components/InteractiveSystemFlow';
import { DatabaseSchemaViewer } from './components/DatabaseSchemaViewer';
import { ArchitectureDeepDive } from './components/ArchitectureDeepDive';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ContactSection } from './components/ContactSection';
import { CleanFooter } from './components/CleanFooter';
import { SystemConsoleDrawer } from './components/SystemConsoleDrawer';
import { ResumeModal } from './components/ResumeModal';
import { VercelDeployModal } from './components/VercelDeployModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isDeployModalOpen, setIsDeployModalOpen] = useState(false);

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToSystems = () => {
    const el = document.getElementById('systems');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToFlow = () => {
    const el = document.getElementById('system-flow');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Clean 3-Zone Navigation Bar */}
      <Navbar 
        onContactClick={handleScrollToContact} 
        onResumeClick={() => setIsResumeOpen(true)}
        onDeployClick={() => setIsDeployModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Quantitative Impact Metrics */}
        <Hero 
          onExploreClick={handleScrollToSystems}
          onFlowClick={handleScrollToFlow}
          onResumeClick={() => setIsResumeOpen(true)}
        />

        {/* Featured Production Systems with In-Browser Live Sandboxes */}
        <SystemsShowcase />

        {/* Live Interactive Architecture Flow Simulator */}
        <div id="system-flow">
          <InteractiveSystemFlow />
        </div>

        {/* Normalized Database Schemas & ERD (PostgreSQL + RLS + Foreign Keys) */}
        <DatabaseSchemaViewer />

        {/* Technical Architecture Deep Dive (Payload Validation, Cross-Tab Sync, Failover, Courier) */}
        <ArchitectureDeepDive />

        {/* Engineering Stack & Technical Specialization Matrix */}
        <SkillsMatrix />

        {/* Contact & Inbound Collaboration Section */}
        <ContactSection />
      </main>

      {/* Floating System Console Drawer for Technical Leads */}
      <SystemConsoleDrawer />

      {/* Printable / Downloadable CV Modal */}
      {isResumeOpen && (
        <ResumeModal onClose={() => setIsResumeOpen(false)} />
      )}

      {/* Vercel Deployment & Code Export Modal */}
      {isDeployModalOpen && (
        <VercelDeployModal onClose={() => setIsDeployModalOpen(false)} />
      )}

      {/* Clean, Minimalist Footer */}
      <CleanFooter />
    </div>
  );
}
