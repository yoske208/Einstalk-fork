import express, { IRouter, Request, Response } from "express";
import {
  addPost,
  deletePost,
  editPost,
  getOnePost,
  getPosts,
} from "../Services/PostService";

const router: IRouter = express.Router();

router.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const allPosts = await getPosts();
    res.json(allPosts);
  } catch (error: any) {
    error.status || 404, error.message;
  }
});

router.get("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const post = await getOnePost(req.params.id);
    res.json(post);
  } catch (error: any) {
    error.status || 404, error.message;
  }
});

router.post("/",async (req:Request,res:Response) :Promise<void> => {
    try {
        const post = await addPost(req.body)
        res.status(200).json(post)
        
    } catch (error:any) {
        error.status || 404, error.message;

        
    }
})

router.put("/:id" ,async (req:Request,res:Response) : Promise<void> => {
    try {
        const updatepost = await editPost(req.params.id,req.body)
        res.json(updatepost)
    } catch (error:any) {
        error.status || 404, error.message;
        
    }
})

router.delete("/:id",async (req:Request,res:Response) : Promise<void> => {
    try {
        const post = await deletePost(req.params.id)
        res.json(post)
    } catch (error:any) {
        error.status || 404, error.message;

        
    }
}) 

export default router
