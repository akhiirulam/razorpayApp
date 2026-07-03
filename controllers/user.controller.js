import userData from "../models/user.model.js";
import { jwtTokenCreate } from "../utils/createToken.js";
import bcrypt from "bcrypt";

const createUser = async (req, res) => {
  const { userName, password, email, phoneNumber } = req.body;
  try {
  } catch (error) {}
};

const login = async (req, res) => {
  const { userName, password } = req.body;

  console.log(userName, password);
};

const userDashboard = async (req, res) => {};

const logout = async (req, res) => {};

export { login, userDashboard, logout, createUser };
