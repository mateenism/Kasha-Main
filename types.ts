// Fix: Import React to use React.FC
import React from 'react';

export interface Service {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  process: {
    title: string;
    description: string;
  }[];
  showcaseImages: string[];
  detailedServices?: {
    title:string;
    items: { title: string; description: string; }[];
  };
  serviceFlexibility?: {
    title: string;
    description: string;
  };
}

export interface PortfolioItem {
  id: number;
  category: 'weddings' | 'corporate' | 'concerts' | 'sports' | 'activations';
  title: string;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  event: string;
  clientImageUrl?: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  bio?: string;
  expertise?: string;
}

export interface ChatMessage {
    role: 'user' | 'model';
    parts: { text: string }[];
}

export interface WhyChooseUsItem {
    icon: React.FC<{className?: string}>;
    title: string;
    description: string;
}

export interface JobOpening {
    id: number;
    title: string;
    location: string;
    type: 'Full-time' | 'Contract' | 'Internship';
    description: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  author: string;
  date: string;
  imageUrl: string;
  excerpt: string;
  content: string;
  tags: string[];
}