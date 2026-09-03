export type Page = 'home' | 'about' | 'services' | 'contact';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  iconName: string;
  image: string;
  category: 'core' | 'advisory';
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  estimatedBudget?: string;
  location?: string;
  message: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  project: string;
}

export interface StatItem {
  value: string;
  label: string;
  detail: string;
}
