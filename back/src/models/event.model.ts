import mongoose, { Document, Schema } from "mongoose";

export interface IEvent extends Document {
  title: string;
  flyer: string;
  type: string;
  content: string;
  createdAt: Date;
  eventStartDate: Date;
  eventEndDate: Date;
}

const EventSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    flyer: { type: String, required: true },
    type: { type: String, required: true, enum: ["competition", "rassemblement"] },
    content: { type: String, required: true },
    eventStartDate: { type: Date, required: true },
    eventEndDate: { type: Date, required: true },
  },
  { timestamps: true },
);

export default mongoose.model<IEvent>("Event", EventSchema);
