import Quiz, { IComment, IQuis } from "../Models/QuisModel";
import User, { IUser } from "../Models/userModel";

const getPosts = async () => {
  try {
    const posts = await Quiz.find();
    console.log(posts);

    if (!posts) throw new Error("cant find posts")
    console.log(41);

    return posts;
  } catch (error: any) {
    return `cant find mongo DB ${error}`;
  }
};

const getOnePost = async (_id: string) => {
  try {
    console.log(_id);
    const post = await Quiz.findById(_id);
    console.log(post);
    if (!post) throw new Error("the post is not found")
    return post;
  } catch (error: any) {
    return `cant find mongo DB ${error}`;
  }
};

const addPost = async (postData:Partial<IQuis>) => {
  try {
    const newPost = new Quiz(postData)
    if(!newPost){
      throw new Error('add puzzle falde')
    }
    return await newPost.save();
  } catch (error) {
    return `cant find the mongo DB ${error}`;
  }
};
const addComment = async(_id:string,CommentData:IComment):Promise<IQuis| void> =>{
  if(!_id || !CommentData){
      throw new Error('id or CommentData missing')
  }
  const quis =  await Quiz.findById(_id)
  if(!quis) {
      throw new Error('post dos not exsist')
  }
  quis.comments.push(CommentData)
  const newCommant = await quis.save()
  if(!newCommant){
    throw new Error('add comment fald')
  }
  return newCommant
}
const editPost = async (userId: string, newData: Partial<IUser>) => {
  try {
    const user = await User.findById(userId);
    const updatePost = await User.findByIdAndUpdate(
      userId,
      {
        ...newData,
        password: user?.password,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    return updatePost;
  } catch (error: any) {
    return  (`cant find the mongo DB ${error}`);
  }
};

const deletePost = async (postId: string) => {
  try {
    const post = await Quiz.findByIdAndDelete(postId);
    return "post deleted";
  } catch (error: any) {
    return `cant find the mongo DB ${error}`;
  }
};

export {
    addPost,
    deletePost,
    editPost,
    getOnePost,
    getPosts,
    addComment
}
