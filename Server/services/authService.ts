import fs from "fs";
import { CookieOptions } from "express";
import { Request, Response } from 'express';
import bcrypt from 'bcrypt'
import User from '../models/userModel'


// const data: string = fs.readFileSync("./data.json", "utf-8");
// const Users = JSON.parse(data)

const cookieConfig: CookieOptions = {
    httpOnly: true,          // הגנה מפני XSS - הקוקי לא נגיש דרך JavaScript בצד הלקוח
    secure: true,            // שליחת הקוקי רק בחיבור HTTPS
    sameSite: 'strict',      // הגנה מפני CSRF
    maxAge: 24 * 60 * 60 * 1000  // תוקף של יום אחד (במילישניות)
};

interface userDTO {
	username: string,
	password: string
}

const loginUser = async (user: userDTO, res: Response) => {
	try {
		const foundUser = await User.findOne({ username: user.username })

		if (!foundUser) return console.log("User not found")
		const isPasswordCorrect = await foundUser.comparePassword(user.password)
		if (!isPasswordCorrect) return console.log("Incorrect password or Email");
return foundUser
	
	} catch (error) {
		throw new Error("Failed to login")
	}
}

const logoutUser = (res: Response): void => {
	try {
		res.clearCookie("auth_token", {
			httpOnly: true,
			secure: true,
			sameSite: "strict",
		});
	} catch (error) {
		console.log(error);
	}
};
      export {
        loginUser,
        logoutUser
      }