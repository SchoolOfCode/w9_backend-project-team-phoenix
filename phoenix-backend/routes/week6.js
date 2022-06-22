import express from "express";
const router = express.Router();

import { getWeek6Info } from "../models/week6.js";

router.get("/", async function (req, res, next) {
  const week6Info = await getWeek6Info();
  res.status(200).json({ message: "Success", payload: week6Info });
});

export default router;
