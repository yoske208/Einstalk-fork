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
        <h5>Puzzle Name: {currentPuzlle.title}</h5>
        <div>Comments
          <CommentsComponent comments={currentPuzlle.comments}/>
        </div>
      </div>
      </div>
      </>
    );
  }
}
