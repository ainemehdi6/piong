export interface Article {
  id: string;
  title: string;
  description: string;
  image: string;
  createdAt: Date;
}

export interface Event {
  id: string;
  title: string;
  flyer: string;
  type: string;
  content: string;
  createdAt: Date;
  eventStartDate: Date;
  eventEndDate: Date;
}
