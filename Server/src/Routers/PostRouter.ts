import express, { IRouter } from "express";
import postController from "../Controller/PostController"

const router : IRouter = express.Router()
router.use("/post" , postController)