import express from "express";
import pool from "../db";
import todoCTRL from "../controllers/todoController";
const router = express.Router();

router.get("/", todoCTRL.getAll);
router.post("/", todoCTRL.addTodo);
router.delete("/:id", todoCTRL.removeTodo);

export default router;
