import jwt from "jsonwebtoken";
import userData from "../models/user.model.js";

export const protect = async (req, res, next) => {
  let token;

  token = req.cookie.jwt;

  if (token) {
    try {
      const verify = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await userData.findOne(decode.email).select("-password");
      next();
      res.send(req.user);
    } catch (error) {
      res.status(401).json("jwt error", error);
    }
  } else {
    res.status(401).json("jwt error");
  }
};
