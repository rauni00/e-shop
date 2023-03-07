import express from "express";
import {
  addNewBusiness,
  verifyEmail,
  resendEmailVerificationOTP,
  loginBusiness,
  updateBusinessProfile,
  getAllBusinesses,
  activateOrDeactivateBusiness,
  deleteAccount,
  deleteBusiness,
  getBusinessDetailsByEmail,
  forgotBusinessPassword,
  resetBusinessPassword,
  changeBusinessPassword,
  isBusinessAvailable,
} from "../controllers/businesses.controller.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// For Web Application

router.get("/", getAllBusinesses); // Get All Businesses
router.patch("/activate-deactivate", activateOrDeactivateBusiness); // Activate or Deactivate Business
router.delete("/delete/:businessEmail", deleteBusiness); // Delete Business

// For Mobile Application

router.post("/signup", addNewBusiness); // Add New Business
router.get("/resend-otp/:businessEmail", resendEmailVerificationOTP); // Resend OTP for Email Verification
router.patch("/verify-email", verifyEmail); // Verify Email
router.post("/login", loginBusiness); // Login Business
router.delete("/delete-account", authMiddleware, deleteAccount); // Delete Business Account
router.patch("/update-business", authMiddleware, updateBusinessProfile); // Update Business Profile
router.get("/forgot-password/:businessEmail", forgotBusinessPassword); // Forgot Password for Email Verification
router.patch("/reset-password", resetBusinessPassword); // Update Business Password
router.patch("/change-password", authMiddleware, changeBusinessPassword); // Change Business Password
router.get("/isAvailable/:businessEmail", isBusinessAvailable); // Check If Business Is Available
router.get("/:email", getBusinessDetailsByEmail); // Get Business Details By Email

export default router;
