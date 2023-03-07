import express from "express";
import {
  loginAdmin,
  addNewAdmin,
  getAllAdmin,
  updateAdminProfile,
  changeAdminPassword,
} from "../controllers/admin.controller.js";

const router = express.Router();

/* For Mobile Application */

router.post("/signup", addNewAdmin); // Add New Admin
router.post("/login", loginAdmin); // Login Admin
router.get("/", getAllAdmin); // Get All Admin
router.patch("/update-admin", updateAdminProfile); // Update Admin Profile
router.patch("/change-password", changeAdminPassword); // Change Admin Password

export default router;
