import express from "express";
const router = express.Router();

import { getWeek1Info } from "../models/week1.js";

router.get("/", async function (req, res, next) {
  const week1Info = await getWeek1Info();
  res.json({ message: "Success", payload: week1Info });
});



export default router;
