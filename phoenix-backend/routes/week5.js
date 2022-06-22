import express from "express";
const router = express.Router();

import { getWeek5Info } from "../models/week5.js";

router.get("/", async function (req, res, next) {
  const week5Info = await getWeek5Info();
  res.status(200).json({ message: "Success", payload: week5Info });
});

export default router;
