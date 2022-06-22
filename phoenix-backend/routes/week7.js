import express from "express";
const router = express.Router();

import { getWeek7Info } from "../models/week7.js";

router.get("/", async function (req, res, next) {
  const week7Info = await getWeek7Info();
  res.status(200).json({ message: "Success", payload: week7Info });
});

export default router;
