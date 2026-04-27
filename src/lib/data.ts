export type ProjectStatus = "Live" | "In Progress" | "Prototype";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  status: ProjectStatus;
  link?: string;
  github?: string;
  /** Tailwind-compatible gradient definition for the card cover */
  gradient: string;
  /** Short accent label, e.g. '32K lines', 'Daily use' */
  accent?: string;
}

export const projects: Project[] = [
  {
    title: "Second Brain",
    description:
      "AI pipeline that captures, classifies, and digests signal from the day. Built so nothing useful slips through the cracks.",
    tech: ["TypeScript", "Claude", "Postgres", "Node"],
    status: "Live",
    accent: "32K lines",
    gradient:
      "linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #7c2d12 100%)",
  },
  {
    title: "Open Brain",
    description:
      "Personal knowledge base with semantic search over years of notes. Daily driver — what I reach for first.",
    tech: ["TypeScript", "pgvector", "Claude", "Next.js"],
    status: "Live",
    accent: "Daily use",
    gradient:
      "linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)",
  },
  {
    title: "Live Ireland",
    description:
      "Location intelligence dashboard over Irish public data — traffic, weather, services, anything open.",
    tech: ["Next.js", "Python", "OpenData", "MapLibre"],
    status: "In Progress",
    accent: "Public data",
    gradient:
      "linear-gradient(135deg, #10b981 0%, #059669 50%, #065f46 100%)",
  },
  {
    title: "Farm Dashboard",
    description:
      "Agricultural intelligence on real Irish data. Fields, herds, markets — all the signal a working farm needs.",
    tech: ["Next.js", "Supabase", "Python", "Mapbox"],
    status: "In Progress",
    accent: "Irish data",
    gradient:
      "linear-gradient(135deg, #84cc16 0%, #65a30d 50%, #365314 100%)",
  },
  {
    title: "Historic Map Viewer",
    description:
      "Ordnance Survey Ireland maps from 1829 to 1943 with overlay modes. Slide through 114 years of the island.",
    tech: ["React", "MapLibre", "WebGL", "Tiles"],
    status: "Live",
    accent: "1829–1943",
    gradient:
      "linear-gradient(135deg, #78350f 0%, #b45309 50%, #fde68a 100%)",
  },
  {
    title: "Right Now",
    description:
      "Installable PWA that nudges you toward a 2-minute micro-intervention when the day starts slipping.",
    tech: ["PWA", "React", "IndexedDB", "Service Worker"],
    status: "Live",
    accent: "Deployed",
    gradient:
      "linear-gradient(135deg, #f97316 0%, #db2777 50%, #7c3aed 100%)",
  },
  {
    title: "Steve",
    description:
      "OCR + AI for Irish energy bills. Drop a PDF, get the numbers — usage, standing charge, the bits suppliers hide.",
    tech: ["Python", "OCR", "Claude", "FastAPI"],
    status: "Prototype",
    accent: "Energy OCR",
    gradient:
      "linear-gradient(135deg, #facc15 0%, #f97316 50%, #111827 100%)",
  },
  {
    title: "KMRT Tracker",
    description:
      "Mountain rescue GPS tracker PWA. Built for field use — offline-first, brutally simple, battery-friendly.",
    tech: ["PWA", "Geolocation", "Leaflet", "Offline"],
    status: "In Progress",
    accent: "Mountain rescue",
    gradient:
      "linear-gradient(135deg, #0ea5e9 0%, #1e3a8a 50%, #020617 100%)",
  },
  {
    title: "SR & Daniel",
    description:
      "Multiplayer tap game I built for my kids. They keep asking for new levels, so it keeps shipping.",
    tech: ["React", "WebSockets", "Supabase", "Realtime"],
    status: "Live",
    accent: "For the kids",
    gradient:
      "linear-gradient(135deg, #ec4899 0%, #f59e0b 50%, #22d3ee 100%)",
  },
];

export interface TechItem {
  name: string;
  /** Category used to colour-group and layout the badge */
  category: "Language" | "Framework" | "Infra" | "AI" | "Tooling";
}

export const techStack: TechItem[] = [
  { name: "TypeScript", category: "Language" },
  { name: "Python", category: "Language" },
  { name: "Next.js", category: "Framework" },
  { name: "React", category: "Framework" },
  { name: "Tailwind CSS", category: "Framework" },
  { name: "Claude Code", category: "AI" },
  { name: "AWS Bedrock", category: "AI" },
  { name: "OpenClaw", category: "AI" },
  { name: "Supabase", category: "Infra" },
  { name: "PostgreSQL", category: "Infra" },
  { name: "Vercel", category: "Infra" },
  { name: "Git", category: "Tooling" },
];

export const social = {
  email: "hello@donalocallaghan.com",
  github: "https://github.com/donalocallaghan",
  linkedin: "https://www.linkedin.com/in/donalocallaghan/",
  x: "https://x.com/donalocallaghan",
};
