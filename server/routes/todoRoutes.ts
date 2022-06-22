import express from "express";
import pool from "../db";
import todoCTRL from "../controllers/todoController";
const router = express.Router();

router.get("/", todoCTRL.getAll);
router.post("/", todoCTRL.addTodo);

export default router;
