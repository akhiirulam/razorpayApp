import { razorpay } from "../utils/razorpay.js";
import crypto from "crypto";
import userData from "../models/user.model.js";
import Payment from "../models/paymentData.model.js";

export const createOrder = async (req, res) => {
  console.log("Hello");
  const userId = req.user._id;

  try {
    const checkUser = await userData.findById(userId);
    console.log(checkUser);
    if (!userId) {
      return res.status(500).json("invalid user");
    } else {
      const options = {
        amount: req.body.amount,
        currency: req.body.currency,
        receipt: crypto.randomUUID(),
      };

      console.log(options, userId);

      const order = await razorpay.orders.create(options);

      console.log("Order:", order);

      return res.status(200).json(order);
    }
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

export const verifyPayment = async (req, res) => {
  const {
    razorpay_payment_id,
    razorpay_order_id,
    razorpay_signature,
    amount,
    currency,
  } = req.body;

  console.log("i am gere");

  // Verify Razorpay signature here

  await Payment.create({
    user: req.user._id,
    razorpay_payment_id,
    razorpay_order_id,
    razorpay_signature,
    amount,
    currency,
    status: "paid",
  });

  return res.status(201).json({
    success: true,
    message: "Payment verified and saved.",
  });
};
