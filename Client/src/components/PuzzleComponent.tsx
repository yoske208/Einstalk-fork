import CommentsComponent from "./CommentsComponent";
import { IPuzzels } from "../Interface/Interfaces";


interface Prop {
  currentPuzlle: IPuzzels;
}

export default function PuzzleComponent({ currentPuzlle }: Prop) {
  
  
  if (currentPuzlle) {
    return (
      <>
      <div className="card-list">
      <div className="card">
        <h4>Puzzle Name: {currentPuzlle.title}</h4>
        <h3>{currentPuzlle.content}</h3>
        <div>Comments
          <CommentsComponent comments={currentPuzlle.comments}/>
        </div>
      </div>
      </div>
      </>
    );
  }
}
