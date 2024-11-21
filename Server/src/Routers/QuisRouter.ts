import express, { IRouter } from "express";
import postController from "../Controller/QuisController"
import authController from "../Controller/authController"

const router : IRouter = express.Router()
router.use("/post" , postController)
router.use("/auth" , authController)

export default router