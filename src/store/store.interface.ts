export interface Acitivity {
  id: number;
  date: string;
  img: string;
  title: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  subTitle: string;
  img: string;
  date: string;
  description: string;
  url: string;
  role: string[];
  skills: string[];
}

export interface Message {
  id: string;
  userName: string;
  content: string;
  createDate: Date;
  ipAddress: string;
}

export interface State {
  projects: Project[];
  activities: Acitivity[];
  messages: Message[];
}
