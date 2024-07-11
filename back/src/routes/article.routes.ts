import { Router } from "express";
import {
  createArticle,
  updateArticle,
  deleteArticle,
  getAllArticles,
  getLastFourArticles,
} from "../controllers/article.controller";
import authMiddleware from "../middleware/auth.middleware";

const router = Router();
router.get("", getAllArticles);
router.get("/lasts", getLastFourArticles);
router.post("", authMiddleware, createArticle);
router.put("/:id", authMiddleware, updateArticle);
router.delete("/:id", authMiddleware, deleteArticle);

export default router;
