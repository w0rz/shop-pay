import mongoose from "mongoose";
import { FaCircleUser } from "react-icons/fa";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "Please enter your full name",
      trim: true,
    },
    email: {
      type: String,
      required: "Please enter your email address",
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: "Please enter a password.",
    },
    role: {
      type: String,
      default: "user",
    },
    image: {
      type: String,
      default: <FaCircleUser />,
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    defaultPaymentMethod: {
      type: String,
      Default: "",
    },
    addresses: [
      {
        firstName: {
          type: String,
        },
        lastName: {
          type: String,
        },
        phoneNumber: {
          type: String,
        },
        address: {
          type: String,
        },
        address1: {
          type: String,
        },
        address2: {
          type: String,
        },
        city: {
          type: String,
        },
        zipCode: {
          type: String,
        },
        state: {
          type: String,
        },
        country: {
          type: String,
        },
        active: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  {
    timestamps: true,
  },
);

const User = mongoose.models.User || mongoose.modle("User", userSchema);

export default User;
