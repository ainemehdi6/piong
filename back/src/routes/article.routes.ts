import { Router } from "express";
import { createArticle, updateArticle, deleteArticle, getAllArticles } from "../controllers/article.controller";
import authMiddleware from "../middleware/auth.middleware";

const router = Router();
router.get("/", getAllArticles);
router.post("/", createArticle);
router.put("/:id", updateArticle);
router.delete("/:id", deleteArticle);

export default router;
