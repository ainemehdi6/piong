import { Router } from "express";
import {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent,
  getUpcomingEvents,
  getTournaments,
  getMeetings,
  getUpcomingMeeting,
  getUpcomingTournament,
} from "../controllers/event.controller";
import authMiddleware from "../middleware/auth.middleware";

const router: Router = Router();

router.post("", authMiddleware, createEvent);
router.get("", getEvents);
router.get("/upcoming", getUpcomingEvents);
router.get("/upcoming/tournament", getUpcomingTournament);
router.get("/upcoming/meeting", getUpcomingMeeting);
router.get("/tournaments", getTournaments);
router.get("/meetings", getMeetings);
router.get("/:id", getEventById);
router.put("/:id", authMiddleware, updateEvent);
router.delete("/:id", authMiddleware, deleteEvent);

export default router;
