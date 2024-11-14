import express from "express";
import {
    loginController,
    signupController
} from "../controllers/userController.js"
// inilizing router
const router = express.Router();

// making the user routes
router.route("/signup").post(signupController)
router.route("/login").post(loginController)

export default router