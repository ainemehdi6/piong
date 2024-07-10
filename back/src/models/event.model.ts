import mongoose, { Document, Schema } from "mongoose";

export interface IEvent extends Document {
  title: string;
  flyer: string;
  type: string;
  content: string;
}

const EventSchema: Schema = new Schema({
  title: { type: String, required: true },
  flyer: { type: String, required: true },
  type: { type: String, required: true, enum: ["competition", "rassemblement"] },
  content: { type: String, required: true },
});

export default mongoose.model<IEvent>("Event", EventSchema);
