import express from "express";
import { createOrder } from "../controllers/payment.controller.js";

const paymentRouter = express.Router();

paymentRouter.post("/createOrder/:id", createOrder);

export default paymentRouter;
