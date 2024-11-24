import Puzzele, { IComment, IPuzzele } from "../Models/puzzleModel";
import User, { IUser } from "../Models/userModel";

const getPuzzele = async () => {
  try {
    const puzzeles = await Puzzele.find();
    console.log(puzzeles);

    if (!puzzeles) return "cant find posts";
    console.log(41);

    return puzzeles;
  } catch (error: any) {
    return `cant find mongo DB ${error}`;
  }
};

const getOnePuzzele = async (_id: string) => {
  try {
    console.log(_id);
    const puzzele = await Puzzele.findById(_id);
    console.log(puzzele);
    if (!puzzele) return "the post is not found";
    return puzzele;
  } catch (error: any) {
    return `cant find mongo DB ${error}`;
  }
};

const addPuzzele = async (postData:Partial<IPuzzele>) => {
  try {
    const newPuzzele = new Puzzele(postData)
    return await newPuzzele.save();
  } catch (error) {
    return `cant find the mongo DB ${error}`;
  }
};
const addComment = async(_id:string,CommentData:IComment):Promise<IPuzzele| void> =>{
  if(!_id || !CommentData){
      console.error('sum data missing')
      return 
  }
  const puzzele =  await Puzzele.findById(_id)
  if(!puzzele) {
      console.error('post dos not exsist')
      return
  }
  puzzele.comments.push(CommentData)
  await puzzele.save()
  return puzzele
}
const editPuzzele = async (_id: string, newData: Partial<IUser>) => {
  try {
    const user = await User.findById(_id);
    const updatePuzzele = await User.findByIdAndUpdate(
      _id,
      {
        ...newData,
        password: user?.password,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    return updatePuzzele;
  } catch (error: any) {
    return  (`cant find the mongo DB ${error}`);
  }
};

const deletePuzzele = async (_id: string) => {
  try {
    const puzzele = await Puzzele.findByIdAndDelete(_id);
    return "post deleted";
  } catch (error: any) {
    return `cant find the mongo DB ${error}`;
  }
};

export {
    addPuzzele ,
    deletePuzzele ,
    editPuzzele,
    getOnePuzzele,
    getPuzzele,
    addComment
}
