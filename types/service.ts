export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string; // Icon component name reference
  features: string[];
  benefits: string[];
  technologies?: string[];
  serviceTypes?: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
  processSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  pricing?: {
    starting: string;
    note?: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
}
