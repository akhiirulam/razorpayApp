import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

const MONGO_URL = process.env.MONGO_URI;

export const mongoConnect = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Successfully connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

mongoConnect();
