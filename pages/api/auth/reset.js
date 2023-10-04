import bcrypt from "bcrypt";
import db from "../../../utils/db";
import validateEmail from "../../../utils/validation";
import User from "../../../models/User";
import { createActivationToken, createResetToken } from "../../../utils/tokens";
import { sendEmail } from "../../../utils/sendEmails";
import { resetEmailTemplate } from "../../../emails/resetEmailTemplate";

export default async function handler(req, res) {
  try {
    await db.connectDb();
    const { user_id, password } = req.body;
    const user = await User.findById(user_id);
    if (!user) {
      return res.status(400).json({ message: "This Account does not exist." });
    }
    const cryptoPassword = await bcrypt.hash(password, 12);
    await user.updateOne({ password: cryptoPassword });
    await db.disconnectDb();
    res.json({ email: user.email });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
