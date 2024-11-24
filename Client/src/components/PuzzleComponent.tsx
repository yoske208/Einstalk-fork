import { useContext } from "react";
import { PuzzelContext } from "../Provider/PuzzelsProvider";
import { Link } from "react-router-dom";
import CommentsComponent from "../components/CommentsComponent";


interface Prop {
  id: string;
}

export default function PuzzleComponent({ id }: Prop) {
  const { puzzels } = useContext(PuzzelContext);
  const currentPuzlle = puzzels.find((p) => p._id === id);
  if (currentPuzlle) {
    return (
      <div>
        <h5>Puzzle Num: {currentPuzlle._id.toString()}</h5>
        <Link to={'users/' + currentPuzlle.author}></Link>
        <div>
          <CommentsComponent comments={currentPuzlle.comments}/>
        </div>
      </div>
    );
  }
}
