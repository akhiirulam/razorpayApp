import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

app.use(express.json());
app.get("/", (rea, res) => {
  res.send("established");
});

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
  console.log(`server running http://localhost:${PORT}`);
});
