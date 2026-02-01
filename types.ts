
export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  webapp: string;
  date: string;
}

export interface SkillItem {
  name: string;
  image: string;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export interface Experience {
  id: number;
  img: string;
  role: string;
  company: string;
  date: string;
  desc: string;
  skills: string[];
}

export interface Education {
  id: number;
  img: string;
  school: string;
  date: string;
  grade: string;
  desc: string;
  degree: string;
}

export interface Volunteer {
  index: number;
  role: string;
  organization: string;
  date: string;
  desc: string;
  img: string;
  skills: string[];
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
