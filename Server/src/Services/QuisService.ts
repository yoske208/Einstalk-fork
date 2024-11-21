import Quiz, { IQuis } from "../Models/QuisModel";
import User, { IUser } from "../Models/userModel";

const getPosts = async () => {
  try {
    const posts = await Quiz.find((post: any) => posts.push(post));
    console.log(posts);

    if (!posts) return "cant find posts";
    console.log(41);

    return posts;
  } catch (error: any) {
    return `cant find mongo DB ${error}`;
  }
};

const getOnePost = async (postId: string) => {
  try {
    console.log(postId);
    const post = await Quiz.findById(postId);
    console.log(post);
    if (!post) return "the post is not found";
    return post;
  } catch (error: any) {
    return `cant find mongo DB ${error}`;
  }
};

const addPost = async (postData: IQuis) => {
  try {
    const newPost = new Quiz(postData);
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
    getPosts 
}
