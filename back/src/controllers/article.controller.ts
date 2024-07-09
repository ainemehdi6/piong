import { Request, Response } from "express";
import Article from "../models/article.model";

export const createArticle = async (req: Request, res: Response) => {
  try {
    const { title, description, image, userId } = req.body;
    const newArticle = new Article({ title, description, image, userId });
    const savedArticle = await newArticle.save();
    res.status(201).json(savedArticle);
  } catch (error) {
    console.error("Error creating article:", error);
    res.status(500).send("Error creating article");
  }
};

export const getAllArticles = async (req: Request, res: Response) => {
  try {
    const articles = await Article.find().exec();
    res.status(200).json(articles);
  } catch (error) {
    console.error("Error getting articles:", error);
    res.status(500).send("Error getting articles");
  }
};

export const updateArticle = async (req: Request, res: Response) => {
  try {
    const { title, description, image } = req.body;
    const updatedArticle = await Article.findByIdAndUpdate(req.params.id, { title, description, image }, { new: true });
    if (!updatedArticle) {
      return res.status(404).send("Article not found");
    }
    res.status(200).json(updatedArticle);
  } catch (error) {
    console.error("Error updating article:", error);
    res.status(500).send("Error updating article");
  }
};

export const deleteArticle = async (req: Request, res: Response) => {
  try {
    const deletedArticle = await Article.findByIdAndDelete(req.params.id);
    if (!deletedArticle) {
      return res.status(404).send("Article not found");
    }
    res.status(200).json(deletedArticle);
  } catch (error) {
    console.error("Error deleting article:", error);
    res.status(500).send("Error deleting article");
  }
};
