import express from "express";
const router = express.Router();

import { createCategory } from "../models/createCategory.js";

router.post("/", async function (req, res) {
  const newCategory = req.body;
  const response = await createCategory(newCategory);
  res.json({ success: true, payload: response });
});

export default router;
