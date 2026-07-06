import userData from "../models/user.model.js";
import { jwtTokenCreate } from "../utils/createToken.js";
import bcrypt from "bcrypt";
import razorpay from "razorpay";

const createUser = async (req, res) => {
  const { userName, password, email, phoneNumber } = req.body;

  try {
    if (!userName && !password && !email && !phoneNumber) {
      res.send("Enter credentials");
    }
    const userExist = await userData.findOne({ email });

    if (userExist) {
      res.send("Email already exist, Please choose another Email");
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new userData({
        userName: userName,
        email: email,
        password: hashedPassword,
        phoneNumber: phoneNumber,
      });
      const result = newUser.save();

      jwtTokenCreate(res, newUser.email);
      res.status(200).json("New user created");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);
  try {
    const findUser = await userData.findOne({ email });
    console.log(findUser);
    if (findUser && (await bcrypt.compare(password, findUser.password))) {
      jwtTokenCreate(res, findUser.email);
      res.redirect("/api/user/userDashboard");
    }
  } catch (error) {
    res.status(500).json("Login failed, Check credentials");
  }
};

const userDashboard = (req, res) => {
  res.sendFile(process.cwd() + "/views/dashboard.html");
};

const logout = async (req, res) => {
  console.log("clear cookie");

  res.cookie("jwt", "", {
    httyOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "Logged out successfully" });
};

export { login, userDashboard, logout, createUser };
