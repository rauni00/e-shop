import mongoose from "mongoose";

const CustomersSchema = new mongoose.Schema(
  {
    profileImage: {
      type: String,
      default: "",
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      immutable: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    otp: {
      type: Number,
      required: true,
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    collection: "Customers",
  }
);

export default mongoose.model("Customers", CustomersSchema);
