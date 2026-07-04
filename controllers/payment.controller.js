import { razorpay } from "../utils/razorpay.js";
import crypto from "crypto";
import userData from "../models/user.model.js";

export const createOrder = async (req, res) => {
  const { userId } = req.body.id;

  try {
    const checkUser = userData.findById({ userId });
    if (!userId) {
      res.status(500).json("invalid user");
    } else {
      const options = {
        amount: req.body.amount,
        currency: req.body.currency,
        receipt: crypto.randomUUID(),
      };

      const order = await razorpay.orders.create(options);

      res.status(200).json(order);
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
