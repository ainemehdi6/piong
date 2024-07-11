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
