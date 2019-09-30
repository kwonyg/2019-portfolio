export interface Acitivity {
  id: number;
  date: string;
  img: string;
  title: string;
  description: string;
}

export interface Project {
  id: number;
  date: string;
  img: string;
  title: string;
  description: string;
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
