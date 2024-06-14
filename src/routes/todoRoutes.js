import express from "express";
import {
  addTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../controllers/todoController.js";
const router = express.Router();

router.get("/", getTodos);
router.post("/create", addTodo);
router.put("/update/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
