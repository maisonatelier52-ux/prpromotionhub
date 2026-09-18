export interface AuthorProfile {
  slug: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  longBio: string;
  expertise: string[];
  education: string;
  experience: string;
  linkedin: string;
  twitter: string;
  email: string;
}

export const AUTHORS_DATA: Record<string, AuthorProfile> = {
  "elena-rostova": {
    slug: "elena-rostova",
    name: "Elena Rostova",
    role: "Senior Corporate Communications Strategist",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    bio: "Elena Rostova is a senior communications strategist and corporate governance analyst with over 16 years advising Fortune 500 leadership on crisis navigation and stakeholder alignment.",
    longBio: "Elena Rostova leads the Corporate Affairs and Strategic Communications desk at PR Promotion Hub. Prior to her editorial tenure, Elena spent over a decade advising multinational financial institutions and consumer brands through contentious proxy battles, cross-border M&A transitions, and complex crisis management scenarios. She holds a Master of Science in Strategic Communications from Columbia University and regularly lectures on ethical communications and executive brand stewardship.",
    expertise: ["Crisis Communication", "Corporate Governance", "Executive Reputation", "Stakeholder Relations", "Media Strategy"],
    education: "M.S. in Strategic Communications, Columbia University",
    experience: "16+ years in corporate affairs, media relations, and crisis consultancy.",
    linkedin: "https://www.linkedin.com/in/elena-rostova-pr",
    twitter: "https://x.com/promotionh77500",
    email: "editorial@prpromotionhub.com"
  },
  "marcus-vance": {
    slug: "marcus-vance",
    name: "Marcus Vance",
    role: "Lead Technology & MarTech Editor",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    bio: "Marcus Vance specializes in enterprise communication technologies, generative AI in media monitoring, and algorithm-driven digital marketing architectures.",
    longBio: "Marcus Vance oversees coverage of artificial intelligence, MarTech stacks, and media intelligence software at PR Promotion Hub. With a dual background in computer science and media ethics, Marcus analyzes how algorithmic curation, synthetic media, and large language models are altering newsrooms, agency operations, and brand safety protocols. His commentary has been featured across major tech publications and European digital media forums.",
    expertise: ["AI in Public Relations", "MarTech Infrastructure", "Media Intelligence", "Digital Transformation", "Synthetic Media Ethics"],
    education: "B.S. in Information Systems & Digital Media, Stanford University",
    experience: "12+ years in technology journalism, software analysis, and communication engineering.",
    linkedin: "https://www.linkedin.com/in/marcus-vance-tech",
    twitter: "https://x.com/promotionh77500",
    email: "techdesk@prpromotionhub.com"
  },
  "sophia-sterling": {
    slug: "sophia-sterling",
    name: "Sophia Sterling",
    role: "Director of Reputation & Brand Defense",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    bio: "Sophia Sterling evaluates online reputation management, executive image preservation, brand trust metrics, and algorithmic search integrity.",
    longBio: "Sophia Sterling directs research into brand defense, executive search footprint optimization, and corporate narrative security. A veteran of top London and New York reputation advisory practices, Sophia counsels boards on anticipating digital backlash, responding to algorithmic disinformation, and building institutional resilience. She is a co-author of PR Promotion Hub's annual Reputation Benchmarking Index.",
    expertise: ["Online Reputation Management", "Search Entity Optimization", "Crisis Post-Mortems", "Brand Trust Metrics", "Executive Profiling"],
    education: "M.A. in International Relations & Media, London School of Economics (LSE)",
    experience: "14+ years in reputation advisory and strategic counsel.",
    linkedin: "https://www.linkedin.com/in/sophia-sterling-pr",
    twitter: "https://x.com/promotionh77500",
    email: "reputation@prpromotionhub.com"
  },
  "david-chen": {
    slug: "david-chen",
    name: "David Chen",
    role: "Senior Financial Journalist & Markets Analyst",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    bio: "David Chen covers capital markets, financial communications, private equity disclosures, and international banking regulations.",
    longBio: "David Chen leads business and financial coverage at PR Promotion Hub, dissecting corporate filings, investor briefings, and macroeconomic shifts affecting corporate communicators. Previously an equity research associate and financial correspondent, David translates complex balance sheet restructuring and regulatory compliance into clear, actionable intelligence for business leaders.",
    expertise: ["Financial Communications", "Investor Relations", "Private Equity", "Regulatory Filings", "Global Markets"],
    education: "B.A. in Economics & Financial Journalism, NYU Stern",
    experience: "11+ years in market reporting and financial journalism.",
    linkedin: "https://www.linkedin.com/in/david-chen-finance",
    twitter: "https://x.com/promotionh77500",
    email: "finance@prpromotionhub.com"
  },
  "pr-promotion-hub": {
    slug: "pr-promotion-hub",
    name: "PR Promotion Hub Editorial Board",
    role: "Institutional Research & Editorial Collective",
    avatar: "/images/pr-logo.webp",
    bio: "The PR Promotion Hub Editorial Board delivers collaborative, multi-sourced intelligence reports, industry benchmarking studies, and consensus editorial analyses.",
    longBio: "The PR Promotion Hub Editorial Board brings together senior editors, research analysts, and communications consultants. Collective investigations, data-driven whitepapers, and industry benchmarks are reviewed under strict four-eyes verification protocols to ensure fact-based impartiality and deep analytical authority.",
    expertise: ["Industry Benchmarking", "Consensus Analysis", "Whitepapers", "Editorial Standards"],
    education: "Collaborative Editorial & Research Board",
    experience: "Multi-disciplinary team with decades of combined journalism and strategic communications expertise.",
    linkedin: "https://www.linkedin.com/company/prpromotionhub",
    twitter: "https://x.com/promotionh77500",
    email: "editorial@prpromotionhub.com"
  }
};

export function getAuthorBySlug(slug: string): AuthorProfile {
  return AUTHORS_DATA[slug] || AUTHORS_DATA["pr-promotion-hub"];
}
