import express from "express";
import {
  login,
  createUser,
  userDashboard,
  logout,
} from "../controllers/user.controller.js";
import router from "./routes.js";

const userRouter = express.Router();

userRouter.post("/createUser", createUser);
userRouter.post("/login", login);
userRouter.get("/userDashboard", userDashboard);
userRouter.post("/logout", logout);

export default userRouter;
