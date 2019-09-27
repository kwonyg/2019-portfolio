export interface Acitivity {
  id: number;
  title: string;
  content: string;
}

export interface Message {
  id: string;
  userName: string;
  content: string;
  createDate: Date;
  ipAddress: string;
}

export interface State {
  activities: Acitivity[];
  messages: Message[];
}
