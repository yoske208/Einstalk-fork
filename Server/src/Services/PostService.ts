import Post, { IPost } from "../Models/postModel";
import User, { IUser } from "../Models/userModel";

const getPosts = async () => {
  try {
    const posts = await Post.find();
    if (!posts) return "cant find posts";
    return posts;
  } catch (error: any) {
    return `cant find mongo DB ${error}`;
  }
};

const getOnePost = async (postId: string) => {
  try {
    const post = await Post.findById(postId);
    if (!post) return "the post is not found";
    return post;
  } catch (error: any) {
    return `cant find mongo DB ${error}`;
  }
};

const addPost = async (postData: IPost) => {
  try {
    const newPost = new Post(postData);
    if (!newPost) return "cant to add this post";
    await postData.save();
    return postData;
  } catch (error) {
    return `cant find the mongo DB ${error}`;
  }
};

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
    const post = await Post.findByIdAndDelete(postId);
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
    getPosts 
}
