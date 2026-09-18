export interface ResearchReport {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  publishDate: string;
  pages: number;
  format: string;
  category: string;
  keyFindings: string[];
  downloadUrl: string;
  coverImage: string;
  author: string;
}

export const RESEARCH_REPORTS: ResearchReport[] = [
  {
    id: "state-of-corporate-communication-2026",
    slug: "state-of-corporate-communication-2026",
    title: "State of Corporate Communication 2026",
    subtitle: "Navigating Algorithmic Newsrooms, Stakeholder Polarization, and Chief Reputation Officer Mandates",
    description: "An empirical benchmarking survey of 450+ Chief Communications Officers across North America and Europe exploring how boardroom priorities have pivoted toward real-time narrative defense and cross-platform algorithmic intelligence.",
    publishDate: "2026-02-14",
    pages: 48,
    format: "Executive PDF & Data Tables",
    category: "Corporate Affairs",
    keyFindings: [
      "78% of enterprise CCOs now report direct line accountability to the Board of Directors on brand risk.",
      "Executive spend on predictive media intelligence tools grew by 34% year-over-year.",
      "Crisis response time SLAs have condensed from 24 hours to under 45 minutes due to automated social contagion.",
      "Internal communications alignment ranked as the #1 determinant in weathering public brand controversies."
    ],
    downloadUrl: "#download-report",
    coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    author: "Elena Rostova & The PR Promotion Hub Research Desk"
  },
  {
    id: "ai-impact-on-public-relations",
    slug: "ai-impact-on-public-relations",
    title: "AI Impact on Public Relations: The Algorithmic Shift",
    subtitle: "Evaluating Generative Automation, Synthetic Media Threat Models, and Media Monitoring Efficacy",
    description: "A comprehensive technical evaluation of 28 enterprise communications AI platforms, dissecting generative press draft efficacy, sentiment hallucination rates, and proactive brand protection frameworks.",
    publishDate: "2026-01-20",
    pages: 36,
    format: "Technical Briefing & Matrix",
    category: "Technology & Innovation",
    keyFindings: [
      "Over 62% of agency communicators utilize generative tools for initial briefing synthesis, but 91% enforce human sign-off.",
      "Synthetic audio and visual brand impersonation incidents increased 140% across corporate sectors.",
      "Traditional sentiment analysis tools failed on 38% of nuanced sarcasm and activist shareholder subtext."
    ],
    downloadUrl: "#download-report",
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    author: "Marcus Vance"
  },
  {
    id: "reputation-defense-playbook-2026",
    slug: "reputation-defense-playbook-2026",
    title: "Corporate Reputation Defense & Crisis Recovery Playbook",
    subtitle: "A Field Manual for Restoring Brand Equity, Search Engine Integrity, and Investor Confidence",
    description: "Standard operating procedures and legal-communications coordination blueprints for neutralizing executive defamation, managing hostile shareholder campaigns, and repairing organic search knowledge panels.",
    publishDate: "2025-11-10",
    pages: 52,
    format: "Operational SOPs & Case Studies",
    category: "Reputation & Crisis",
    keyFindings: [
      "Speed of accurate correction issuance correlates with a 50% faster rebound in corporate share sentiment.",
      "Coordinated Wikipedia and Wikidata compliance protocols prevented 85% of unauthorized vandalism escalation.",
      "Legal-communications integration within the first 6 hours reduced secondary litigation exposure by 41%."
    ],
    downloadUrl: "#download-report",
    coverImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    author: "Sophia Sterling"
  }
];
