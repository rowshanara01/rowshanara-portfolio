export type Language = 'bn' | 'en';

export interface ProjectMetric {
  label: string;
  value: string;
  change?: string;
}

export interface ArchitectureStep {
  name: string;
  role: string;
  tech: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'ai-chatbot' | 'saas-platform' | 'ai-document' | 'workflow';
  status: 'Production Live' | 'Beta Deployed' | 'Open Source';
  shortDesc: string;
  problem: string;
  solution: string;
  architecture: ArchitectureStep[];
  metrics: ProjectMetric[];
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  hasInteractiveSimulator?: boolean;
}

export interface AuditQuestion {
  id: string;
  category: 'demo' | 'metrics' | 'architecture' | 'code' | 'hiring';
  questionBn: string;
  questionEn: string;
  whyImportantBn: string;
  whyImportantEn: string;
  weight: number;
  recommendationBn: string;
  recommendationEn: string;
}

export interface UserCustomProfile {
  name: string;
  title: string;
  bio: string;
  currentSiteUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  email: string;
  yearsOfExp: string;
}
