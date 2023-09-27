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
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "This email does not exist." });
    } else {
    }
    const user_id = createResetToken({
      id: user._id.toString(),
    });
    const url = `${process.env.BASE_URL}/auth/reset/${user_id}`;
    sendEmail(email, url, "", "Reset your password.", resetEmailTemplate);
    await db.disconnectDb();
    res.json({
      message:
        "An email has been sent to you. Please use it to reset your password.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
