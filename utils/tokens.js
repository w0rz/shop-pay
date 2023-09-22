import jwt from "jsonwebtoken";

export default function createAcivationToken(payload) {
  return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, {
    expiresIn: "2d",
  });
}
export function createResetToken(payload) {
  return jwt.sign(payload, process.env.RESET_TOKEN_SECRET, {
    expiresIn: "6h",
  });
}
