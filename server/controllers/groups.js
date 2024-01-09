import { Router } from "express";
import { groupsService } from "../services/groupsService.js";

export const groupsRouter = Router();

groupsRouter.get("/", async (req, res) => {
  const result = await groupsService.get();
  res.status(result.success ? 200 : 400).json(result.data);
});
