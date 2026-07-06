import express from "express";
import {
  createOrder,
  verifyPayment,
} from "../controllers/payment.controller.js";
import { protect } from "../middleware/authProtect.js";

const paymentRouter = express.Router();

paymentRouter.post("/createOrder/:id", createOrder);
paymentRouter.post("/verify", protect, verifyPayment);

export default paymentRouter;
