import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET;

export const jwtTokenCreate = (res, userEmail) => {
  const token = jwt.sign({ userEmail }, jwtSecret, { expiresIn: "30d" });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: false,
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
};
