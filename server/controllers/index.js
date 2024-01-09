import { Router } from "express";
import { contactsRouter } from "./contacts.js";
import { groupsRouter } from "./groups.js";

export const router = Router();

router.use("/contacts", contactsRouter);
router.use("/groups", groupsRouter);
