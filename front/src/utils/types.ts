export interface Article {
  _id: string;
  title: string;
  description: string;
  image: string;
  createdAt: Date;
}

export interface Event {
  _id: string;
  title: string;
  flyer: string;
  type: string;
  content: string;
  createdAt: Date;
  eventStartDate: Date;
  eventEndDate: Date;
}

export interface User {
  _id: string;
  name: string;
  phone: string;
  email: string;
  password: string;
  role: string | null;
}
