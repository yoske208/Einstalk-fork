import express, { IRouter } from "express";
import postController from "../Controller/QuisController"

const router : IRouter = express.Router()
router.use("/post" , postController)

export default router