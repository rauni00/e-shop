import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  addNewFeedback,
  addNewAnonymousFeedback,
  getAllFeedbacks,
  getAllAnonymousFeedbacks,
  getCustomersFeedbacksByEmail,
  getBusinessesFeedbacksByEmail,
  getLoggedInCustomerFeedbacks,
  getLoggedInBusinessFeedbacks,
} from "../controllers/feedbacks.controller.js";

const router = express.Router();

// For Customer Mobile Application

router.get("/", getAllFeedbacks); // Get All Feedbacks
router.post("/add-new", authMiddleware, addNewFeedback); // Add New Feedback
router.post("/anonymous", addNewAnonymousFeedback); // Add Anonymous Feedback
router.get("/loggedin-customer", authMiddleware, getLoggedInCustomerFeedbacks); // Get Logged In Customers Feedbacks

// For Business Mobile Application

router.get("/loggedin-business", authMiddleware, getLoggedInBusinessFeedbacks);
// Get Logged In Business Feedbacks

// Not Required

router.get("/business/:businessEmail", getBusinessesFeedbacksByEmail); // Get Business Feedbacks by Email
router.get("/customer/:email", getCustomersFeedbacksByEmail); // Get Customer Feedbacks by Email
router.get("/anonymous", getAllAnonymousFeedbacks); // Get All Anonymous Feedbacks

/*

Pending APIs -

Customer

Update Customer
Reset Password
Forgot Password
Email OTP
Delete Customer


Business

Update Business
Reset Password
Forgot Password
Email OTP
Delete Business

*/

export default router;
