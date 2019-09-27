export interface Acitivity {
  id: number;
  title: string;
  content: string;
}

export interface State {
  activities: Acitivity[];
}
