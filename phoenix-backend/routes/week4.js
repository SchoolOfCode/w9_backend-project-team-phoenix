import express from "express";
const router = express.Router();

import { getWeek4Info } from "../models/week4.js";

router.get("/", async function (req, res, next) {
  const week4Info = await getWeek4Info();
  res.status(200).json({ message: "Success", payload: week4Info });
});

export default router;
