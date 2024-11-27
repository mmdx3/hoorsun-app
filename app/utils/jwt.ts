import jwt from "jsonwebtoken";


const JWT_SECRET = process.env.JWT_SECRET!;
const REFRESH_SECRET = process.env.REFRESH_SECRET!;

export const GenerateAccessToken = (userId: string) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET!, { expiresIn: "1h" });
};

export const GenerateRefreshToken = (userId: string) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET!, { expiresIn: "7d" });
};

export function verifyToken(token: string, isRefresh = false) {
  const secret = isRefresh ? REFRESH_SECRET : JWT_SECRET;
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    throw new Error("Token is invalid or expired");
  }
}
