import express from "express";
import userRouter from "./user.router.js";
import paymentRouter from "./payment.router.js";
import { protect } from "../middleware/authProtect.js";

import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.use("/user", userRouter);
router.use("/payment", protect, paymentRouter);

router.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/views/index.html");
});

router.get("/login", (req, res) => {
  res.sendFile(process.cwd() + "/views/login.html");
});

router.get("/register", (req, res) => {
  res.sendFile(process.cwd() + "/views/register.html");
});

router.get("/profile", protect, (req, res) => {
  res.json(req.user);
});

router.get("/key", (req, res) => {
  console.log("hellp");
  console.log(process.env.RAZORPAY_KEY);
  res.json({
    key: process.env.RAZORPAY_KEY,
  });
});

export default router;
