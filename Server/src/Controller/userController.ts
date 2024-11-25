import express, { Request, Response, NextFunction } from "express";
import { getPuzzelesByAuthor } from "../Services/PuzzelService";

const router = express.Router();

router.post("/mypussles", async (req: Request, res: Response): Promise<void> =>{
    try {
        // const puzzles = await getPuzzelesByAuthor()
    } catch (error) {
        
    }
})