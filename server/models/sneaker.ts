import mongoose from "mongoose";

const sneakerModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imgURL: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Sneaker = mongoose.model("Sneaker", sneakerModel);

export default Sneaker;
