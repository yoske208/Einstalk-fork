import { Link } from "react-router-dom";
import CommentsComponent from "./commentsComponent";
import { IPuzzels } from "../Interface/Interfaces";


interface Prop {
  currentPuzlle: IPuzzels;
}

export default function PuzzleComponent({ currentPuzlle }: Prop) {
  
  if (currentPuzlle) {
    return (
      <div>
        <h5>Puzzle Num: {currentPuzlle._id}</h5>
        <Link to={'users/' + currentPuzlle.author}>{currentPuzlle.author}</Link>
        <div>Comments
          <CommentsComponent comments={currentPuzlle.comments}/>
        </div>
      </div>
    );
  }
}
