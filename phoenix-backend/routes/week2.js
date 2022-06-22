import express from "express";
const router = express.Router();

import { getWeek2Info } from "../models/week2.js";

router.get("/", async function (req, res, next) {
  const week2Info = await getWeek2Info();
  res.status(200).json({ message: "Success", payload: week2Info });
});

export default router;
