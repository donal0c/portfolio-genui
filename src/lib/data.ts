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
];

export const social = {
  email: "ocallaghandonal2@gmail.com",
  github: "https://github.com/donal0c",
  linkedin: "https://www.linkedin.com/in/donalocallaghan1/",
  x: "https://x.com/donal_ocall",
};
