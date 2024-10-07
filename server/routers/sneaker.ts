import { Router, Request, Response } from "express";
import Sneaker from "../models/sneaker";

const sneaker = Router();

sneaker.post("/api/sneaker", async (req: Request, res: Response) => {
  const { name, brand, price, imgURL, description } = req.body;

  try {
    const newSneaker = await Sneaker.create({
      name,
      brand,
      price,
      imgURL,
      description,
    });

    res.status(201).json(newSneaker);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

sneaker.get("/api/sneaker", async (req, res) => {
  try {
    const sneakers = await Sneaker.find();
    res.json(sneakers);
    return;
  } catch (error) {
    console.log(error);
    res.json({ message: "Internal Server Error" });
    return;
  }
});

export default sneaker;
