import { Router } from "express";
import { contactsService } from "../services/contactsService.js";

export const contactsRouter = Router();

contactsRouter.get("/", async (req, res) => {
  const result = await contactsService.get();
  res.status(result.success ? 200 : 400).json(result.data);
});
contactsRouter.get("/fav", async (req, res) => {
  const result = await contactsService.getFavouriteContacts();
  res.status(result.success ? 200 : 400).json(result.data);
});
