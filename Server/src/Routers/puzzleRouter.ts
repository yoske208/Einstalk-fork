import express, { IRouter } from "express";
import puzzeleController from "../Controller/PuzzelController"
import authController from "../Controller/authController"

const router : IRouter = express.Router()
router.use("/post" , puzzeleController)
router.use("/auth" , authController)

export default router