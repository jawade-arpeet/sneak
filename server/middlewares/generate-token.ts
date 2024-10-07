import jwt from "jsonwebtoken";

function generateToken(userId: string) {
  const secret = process.env.SECRET as string;
  const token = jwt.sign({ userId }, secret, {
    expiresIn: "12h",
    algorithm: "HS256",
  });

  return token;
}

export default generateToken;
