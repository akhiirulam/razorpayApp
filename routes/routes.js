import express from "express";
import userRouter from "./user.router.js";
import paymentRouter from "./payment.router.js";
import { protect } from "../middleware/authProtect.js";

const router = express.Router();

router.use("/user", userRouter);
router.use("/payment", protect, paymentRouter);

export default router;
