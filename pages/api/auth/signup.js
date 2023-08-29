import db from "../../../utils/db";
import validateEmail from "../../../utils/validation";

export default async function handler(req, res) {
  try {
    await db.connectDb();
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please fill in all fields." });
    }
    if (!validateEmail(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }
    r;
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
