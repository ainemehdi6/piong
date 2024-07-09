import mongoose, { Schema, Document } from "mongoose";

export interface IArticle extends Document {
  title: string;
  description: string;
  image: string;
}

const ArticleSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

const Article = mongoose.model<IArticle>("Article", ArticleSchema);

export default Article;
