import { Router } from "express";
import { createArticle, updateArticle, deleteArticle, getAllArticles } from "../controllers/article.controller";
import authMiddleware from "../middleware/auth.middleware";

const router = Router();
router.get("", getAllArticles);
router.post("", authMiddleware, createArticle);
router.put("/:id", authMiddleware, updateArticle);
router.delete("/:id", authMiddleware, deleteArticle);

export default router;
