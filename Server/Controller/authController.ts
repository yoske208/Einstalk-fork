import express, { Request, Response, NextFunction } from "express";
import { loginUser, logoutUser } from "../services/authService";

const router = express.Router();

router.post("/login", async (req: Request, res: Response): Promise<void> => {
	try {
		const user = req.body
		const userMan = await loginUser(user,res)
		res.json(userMan)
	} catch (error: any) {
		console.error(error.message);
	}
});

router.post("/logout", (req: Request, res: Response): void => {
	try {
		logoutUser(res);
		res.status(200).json({ message: "Logged out successfully" });
	} catch (error: any) {
		console.error(error.message);
	}
});


export default router;
