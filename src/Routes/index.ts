import { Application } from "express";
import auth from "./auth.routes";
import rooms from "./rooms.routes";
import statistics from "./statistics.routes";
import students from "./students.routes";

function route(app: Application): void {
  app.use("/api/students", students);
  app.use("/api/statistics", statistics);
  app.use("/api/rooms", rooms);
  app.use("/api/auth", auth);
}

export default route;
