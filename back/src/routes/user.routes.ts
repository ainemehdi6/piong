import { Router } from "express";
import { getUsers, deleteUser, addRoleUser } from "../controllers/user.controller";

const router = Router();

router.get("", getUsers);
router.delete("/:id", deleteUser);
router.post("/:id/validate", addRoleUser);

export default router;
