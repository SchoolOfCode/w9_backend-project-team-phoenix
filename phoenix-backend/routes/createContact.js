import express from "express";
const router = express.Router();

import { createContact } from "../models/createContact.js";

router.post("/", async function (req, res) {
    const newContact = req.body;
    const response = await createContact(newContact);
    console.log(response);
    res.json({ success: true, payload: response });
  });

  export default router;