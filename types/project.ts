export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  detailedDescription: string;
  image: React.ReactNode;
  techStack: string[];
  features: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
  liveLink?: string;
  githubLink?: string;
  duration: string;
  teamSize: string;
}
