import express, { Response, Request, NextFunction } from "express";
import pool from "../db";

const todoCTRL = {
  getAll: async (req: Request, res: Response) => {
    try {
      const allTodos = await pool.query("SELECT * FROM todo ORDER BY id ASC");
      res.json(allTodos.rows);
    } catch (err) {
      console.error(err);
    }
  },
  addTodo: async (req: Request, res: Response) => {
    try {
      const { description } = req.body;
      const newTodo = await pool.query(
        "INSERT INTO todo(description) VALUES ($1) RETURNING *",
        [description]
      );
      res.json(newTodo.rows);
    } catch (err) {
      console.error(err);
    }
  },
  removeTodo: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deleted = await pool.query(
        "DELETE FROM todo WHERE id = ($1) RETURNING *",
        [id]
      );
      res.sendStatus(200);
    } catch (err) {
      console.error(err);
    }
  },
};

export default todoCTRL;
