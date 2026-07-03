import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  paymentId: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Number,
    required: true,
  },
});

const paymentData = mongoose.model("paymentData", paymentSchema);

export default paymentData;
