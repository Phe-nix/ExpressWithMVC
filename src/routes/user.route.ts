import { Router } from "express";
import {
  createUser,
  login,
  getAllUsers,
  getUserById,
} from "../controllers/user.controller";

const router = Router();

router.post("/users", createUser);
router.post("/login", login);
router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);

export default router;
