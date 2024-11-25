import bcrypt from "bcrypt";
import User, { IUser } from "../Models/userModel";
import { Response } from "express";

interface userDTO {
  username: string;
  password: string;
}

const registerUser = async ({
  username,
  password,
}: userDTO): Promise<IUser | null> => {
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      throw new Error("Username already exists");
    }
    const newUser = new User({
      username,
      password,
    });

    await newUser.save();

    return newUser;
  } catch (error: any) {
    throw new Error(error?.message || "error from register");
  }
};


const loginUser = async (username: string, password: string) => {
  try {
    const foundUser = await User.findOne({ username });
    if (!foundUser) throw new Error("User not found");
    const isPasswordCorrect = await bcrypt.compare(password ,foundUser.password);

    if (!isPasswordCorrect) throw new Error("Incorrect password or email");

    return foundUser;
  } catch (error) {
    throw new Error("Failed to login");
  }
};

const logoutUser = (res: Response): void => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });
  } catch (error) {
    console.log(error);
  }
};

export { registerUser, loginUser, logoutUser };
