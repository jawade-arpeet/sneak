import express from "express";
import User from "../../models/user";
import generateToken from "../../middlewares/generate-token";

const router = express.Router();

router.post("/api/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    const newUser = await User.create({ email, password });
    const token = generateToken(newUser._id);

    res.cookie("token", token, { secure: true, signed: true });
    res.status(201).json(newUser);
    return;
    
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
});

export default router;
