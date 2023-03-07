import express from "express";
import {
  addNewCategory,
  getCategory,
} from "../controllers/category.controller.js";

const router = express.Router();
// router.get("/", getAllCustomers); // Get All Customers

// router.patch("/activate-deactivate", activateOrDeactivateCustomer); // Activate or Deactivate Customer

// router.delete("/delete/:email", deleteCustomer); // Delete Customer

/* For Mobile Applications */

router.post("/addCategory", addNewCategory); // Add New category
router.get("/getAll", getCategory); // Add New category
// router.get("/resend-otp/:email", resendEmailVerificationOTP); // Resend OTP for Email Verification
// router.patch("/verify-email", verifyEmail); // Verify Email
// router.post("/login", loginCustomer); // Login Customer
// router.delete("/delete-account", authMiddleware, deleteAccount); // Delete Customer Account
// router.patch("/update-customer", authMiddleware, updateCustomerProfile); // Update Customer Profile
// router.get("/forgot-password/:email", forgotCustomerPassword); // Forgot password for Email Verification
// router.patch("/reset-password", resetCustomerPassword); // Reset Customer Password
// router.patch("/change-password", authMiddleware, changeCustomerPassword); // Change Customer Password
// router.patch("/update-customer/", authMiddleware, updateCustomerProfile);
// // Update Customer Profile

export default router;
