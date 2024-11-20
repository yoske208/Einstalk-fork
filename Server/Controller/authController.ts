import { Request, Response } from "express";
import { registerUser, loginUser, logoutUser } from "../services/authService";

const register = async (req: Request, res: Response): Promise<void> => {
	try {
		const user = req.body;
		const newUser = await registerUser(user);

		if (newUser) {
			res.status(201).json(newUser);
		} else {
			res.status(400).json({ message: "Failed to register user" });
		}
	} catch (error: any) {
		res.status(500).json({ message: error.message });
	}
};

const login = async (req: Request, res: Response): Promise<void> => {
	try {
		const user = req.body;
		const userMan = await loginUser(user, res);
		res.json(userMan);
	} catch (error: any) {
		console.error(error.message);
		res.status(500).json({ message: "Failed to login" });
	}
};

const logout = (req: Request, res: Response): void => {
	try {
		logoutUser(res);
		res.status(200).json({ message: "Logged out successfully" });
	} catch (error: any) {
		console.error(error.message);
		res.status(500).json({ message: "Failed to logout" });
	}
};

export { register, login, logout };
