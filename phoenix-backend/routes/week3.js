import express from "express";
const router = express.Router();

import { getWeek3Info } from "../models/week3.js";

router.get("/", async function (req, res, next) {
  const week3Info = await getWeek3Info();
  res.status(200).json({ message: "Success", payload: week3Info });
});

export default router;
