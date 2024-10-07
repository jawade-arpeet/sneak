import { Router } from "express";
import generateToken from "../../middlewares/generate-token";
import bcrypt from "bcrypt";
import User from "../../models/user";

const login = Router();

login.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      res.status(400).json({ message: "User not found" });
      return;
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      res.status(400).json({ message: "Incorrect password" });
      return;
    }

    const token = generateToken(user._id);
    
    res.cookie("token", token, { secure: true, signed: true });
    res.status(200).json({ message: "Login successful" });
    return;

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
});

export default login;
