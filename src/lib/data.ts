export type ProjectStatus = "Live" | "In Progress" | "Prototype";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  status: ProjectStatus;
  link?: string;
  github?: string;
  gradient: string;
  accent?: string;
}

export const projects: Project[] = [
  {
    title: "Historic Map Viewer",
    description:
      "Ordnance Survey Ireland maps from 1829 to 1943. Slide through 114 years of the island with overlay modes and search.",
    tech: ["Vite", "MapLibre", "OSi Tiles", "TypeScript"],
    status: "Live",
    link: "https://donal-historic-map-viewer.netlify.app",
    github: "https://github.com/donal0c/historic-map-viewer",
    accent: "1829–1943",
    gradient: "linear-gradient(135deg, #78350f 0%, #b45309 50%, #fde68a 100%)",
  },
  {
    title: "808/303 Acid Lab",
    description:
      "Camera-based music instrument. Use your webcam and hand gestures to play a Roland 808 drum machine and 303 acid bass synthesiser in the browser.",
    tech: ["MediaPipe", "Web Audio API", "JavaScript", "WebRTC"],
    status: "Live",
    link: "https://donal-808-303-acid-lab.netlify.app",
    github: "https://github.com/donal0c/808-303-acid-lab",
    accent: "Webcam + Sound",
    gradient: "linear-gradient(135deg, #1e1b4b 0%, #7c3aed 50%, #ec4899 100%)",
  },
  {
    title: "Ireland Pulse",
    description:
      "A generative ambient art piece. Live data from Reddit, Irish Rail, Met \u00c9ireann and EirGrid woven into a single breathing visual \u2014 the mood of Ireland in real time.",
    tech: ["React", "Vite", "Canvas", "Irish Rail", "Met \u00c9ireann", "Reddit"],
    status: "Live",
    link: "https://ireland-pulse.netlify.app",
    github: "https://github.com/donal0c/ireland-pulse",
    accent: "Live Data Art",
    gradient: "linear-gradient(135deg, #064e3b 0%, #065f46 40%, #10b981 100%)",
  },
  {
    title: "GreenScore",
    description:
      "Rate any Irish address or Eircode 0\u2013100 across walkability, public transport, flood risk, air quality and demographics. Real data, under 5 seconds.",
    tech: ["TypeScript", "Hono", "NTA GTFS", "OPW", "CSO", "EPA"],
    status: "Live",
    link: "https://donal-greenscore.netlify.app",
    github: "https://github.com/donal0c/greenscore",
    accent: "Eircode \u2192 Score",
    gradient: "linear-gradient(135deg, #14532d 0%, #166534 50%, #4ade80 100%)",
  },
];

export const social = {
  email: "ocallaghandonal2@gmail.com",
  github: "https://github.com/donal0c",
  linkedin: "https://www.linkedin.com/in/donalocallaghan1/",
  x: "https://x.com/donal_ocall",
};
