import mongoose from "mongoose";

const BusinessesSchema = new mongoose.Schema(
  {
    businessImage: {
      type: String,
      default: "",
    },
    businessName: {
      type: String,
      required: true,
      unique: true,
      immutable: true,
      uppercase: true,
    },
    businessAddress: {
      type: String,
      required: true,
    },
    businessEmail: {
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
    businessPhoneNumber: {
      type: String,
      required: true,
    },
    businessWebsiteUrl: {
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
    collection: "Businesses",
  }
);

export default mongoose.model("BusinessesModel", BusinessesSchema);
