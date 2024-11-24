import express, { IRouter, Request, Response } from "express";
import {
  addComment,
  addPost,
  deletePost,
  editPost,
  getOnePost,
  getPosts,
} from "../Services/QuisService";
import Quis, { IQuis } from "../Models/QuisModel";
import { authMiddleware, authRequest } from "../middleware/authMiddleware";

const router: IRouter = express.Router();

router.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    console.log(1);
    
    const allPosts = await getPosts();
    console.log(allPosts);

    res.json(allPosts);
    console.log(res.json());
    
  } catch (error: any) {
    error.status || 404, error.message;
  }
});

router.get("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const post = await getOnePost(req.params._id);
    res.json(post);
  } catch (error: any) {
    error.status || 404, error.message;
  }
});
// creat post
router.post("/", authMiddleware,async (req:authRequest,res:Response) :Promise<void> => {
    try {
      const { title, content } = req.body; 
      const author = req.user
      if (! title || !content || !author) {
        res.status(400).json({ message: " אחד מהאלמנטים חסר" });
        return;
     } 
     const newQuis = new Quis({title,content,author,comments:[]}) 
        const post = await addPost(newQuis)
        res.status(200).json(post)
        
    } catch (error:any) {
        error.status || 404, error.message;  
    }
})

router.put("/:id" ,authMiddleware ,async (req:authRequest,res:Response) : Promise<void> => {
    try {
      const id = req.params.id
      const { content } = req.body; 
      const author = req.user
      if (!content || !author) {
        res.status(400).json({ message: " אחד מהאלמנטים חסר" });
        return;
     }   
     const newComment = {content,author,};
     const savedComment = await addComment(id,newComment);
 
        res.json(savedComment)
    } catch (error:any) {
        error.status || 404, error.message;
        
    }
})

router.delete("/:id",async (req:Request,res:Response) : Promise<void> => {
    try {
        const post = await deletePost(req.params._id)
        res.json(post)
    } catch (error:any) {
        error.status || 404, error.message;

        
    }
}) 

export default router
