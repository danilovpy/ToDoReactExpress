import express, { Application, Request, Response, NextFunction } from "express";
const app: Application = express();
const port: number = 5000;
import cors from "cors";

import todoRoutes from "./routes/todoRoutes";

app.use(express.json());
app.use(cors());

app.use("/todo", todoRoutes);

app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});
