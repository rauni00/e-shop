import express from "express";
import {
  addNewCustomer,
  verifyEmail,
  resendEmailVerificationOTP,
  loginCustomer,
  updateCustomerProfile,
  getAllCustomers,
  activateOrDeactivateCustomer,
  deleteCustomer,
  deleteAccount,
  forgotCustomerPassword,
  resetCustomerPassword,
  changeCustomerPassword,
} from "../controllers/customers.controller.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();
router.get("/", getAllCustomers); // Get All Customers

router.patch("/activate-deactivate", activateOrDeactivateCustomer); // Activate or Deactivate Customer

router.delete("/delete/:email", deleteCustomer); // Delete Customer

/* For Mobile Applications */

router.post("/signup", addNewCustomer); // Add New Customer
router.get("/resend-otp/:email", resendEmailVerificationOTP); // Resend OTP for Email Verification
router.patch("/verify-email", verifyEmail); // Verify Email
router.post("/login", loginCustomer); // Login Customer
router.delete("/delete-account", authMiddleware, deleteAccount); // Delete Customer Account
router.patch("/update-customer", authMiddleware, updateCustomerProfile); // Update Customer Profile
router.get("/forgot-password/:email", forgotCustomerPassword); // Forgot password for Email Verification
router.patch("/reset-password", resetCustomerPassword); // Reset Customer Password
router.patch("/change-password", authMiddleware, changeCustomerPassword); // Change Customer Password
router.patch("/update-customer/", authMiddleware, updateCustomerProfile);
// Update Customer Profile

export default router;
