import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    razorpay_payment_id: {
      type: String,
      required: true,
      unique: true,
    },

    razorpay_order_id: {
      type: String,
      required: true,
      unique: true,
    },

    razorpay_signature: {
      type: String,
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    currency: {
      type: String,
      default: "INR",
    },

    status: {
      type: String,
      enum: ["created", "paid", "failed", "refunded"],
      default: "paid",
    },
  },
  {
    timestamps: true,
  },
);

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;
