      
import jwt from "jsonwebtoken";
import { Types } from "mongoose";

function generateToken(userId: Types.ObjectId) {
  const secret = process.env.SECRET as string;
  const token = jwt.sign({ userId }, secret, {
    expiresIn: "12h",
    algorithm: "HS256",
  });

  return token;
}

export default generateToken;
