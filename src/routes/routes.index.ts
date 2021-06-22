import { Router } from "express";
const router = Router();
import {
  getUSer,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/index.controller";

router.get("/users", getUSer);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
