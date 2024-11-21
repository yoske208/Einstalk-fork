import express, {IRouter } from "express";

const router: IRouter = express.Router();

router.use("/data");
router.use("/auth");

export default router;
