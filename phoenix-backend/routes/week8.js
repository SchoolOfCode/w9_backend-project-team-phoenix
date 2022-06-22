import express from "express";
const router = express.Router();

import { getWeek8Info } from "../models/week8.js";

router.get("/", async function (req, res, next) {
  const week8Info = await getWeek8Info();
  res.status(200).json({ message: "Success", payload: week8Info });
});

export default router;
