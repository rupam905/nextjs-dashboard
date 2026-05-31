export interface User {
  id: string;
  name: string;
  streak: number;
}

export interface Course {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
  created_at: string;
}
