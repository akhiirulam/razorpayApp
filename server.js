import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { mongoConnect } from "./utils/dbConfig.js";
import router from "./routes/routes.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/api", router);

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
  console.log(`server running http://localhost:${PORT}`);
});
