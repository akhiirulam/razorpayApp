import express from "express";
import {
  login,
  createUser,
  userDashboard,
} from "../controllers/user.controller.js";
import router from "./routes.js";

const userRouter = express.Router();

userRouter.post("/createUser", createUser);
userRouter.post("/login", login);
userRouter.get("/userDashboard", userDashboard);

export default userRouter;
