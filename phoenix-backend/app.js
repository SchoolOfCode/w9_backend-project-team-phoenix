import express from "express";
import path from "path";

import __dirname from "./dirname.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import logger from "morgan";
import basicAuth from "express-basic-auth";

import week1 from "./routes/week1.js";
import week2 from "./routes/week2.js";
import week3 from "./routes/week3.js";
import week4 from "./routes/week4.js";
import week5 from "./routes/week5.js";
import week6 from "./routes/week6.js";
import week7 from "./routes/week7.js";
import week8 from "./routes/week8.js";
import contacts from "./routes/createContact.js";
import category from "./routes/createCategory.js";

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/week1", week1);
app.use("/week2", week2);
app.use("/week3", week3);
app.use("/week4", week4);
app.use("/week5", week5);
app.use("/week6", week6);
app.use("/week7", week7);
app.use("/week8", week8);
app.use(
  "/contacts",
  basicAuth({
    users: { admin: "supersecret" },
    challenge: true,
  }),
  contacts
);
app.use(
  "/category",
  basicAuth({
    users: { admin: "supersecret" },
    challenge: true,
  }),
  category
);

app.use(function (req, res, next) {
  res
    .status(404)
    .json({ message: "We couldn't find what you were looking for 😞" });
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json(err);
});

export default app;
