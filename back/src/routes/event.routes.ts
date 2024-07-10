import { Router } from "express";
import { createEvent, getEvents, getEventById, updateEvent, deleteEvent } from "../controllers/event.controller";
import authMiddleware from "../middleware/auth.middleware";

const router: Router = Router();

router.post("", authMiddleware, createEvent);
router.get("", getEvents);
router.get("/:id", getEventById);
router.put("/:id", authMiddleware, updateEvent);
router.delete("/:id", authMiddleware, deleteEvent);

export default router;
