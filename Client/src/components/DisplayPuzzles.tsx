import { Link } from "react-router-dom";
import { IPuzzels } from "../Interface/Interfaces";
import PuzzleComponent from "./PuzzleComponent";
import PageHeader from "../pages/PageHeader";

interface Props {
  puzzles: IPuzzels[];
}

export default function DisplayPuzzles({ puzzles }: Props) {
  return (
    <>
      <div className="card-list">
        {puzzles.map((puzzle, index) => (
          <div key={index} className="card">
            <div>
              <img src={puzzle.img} alt={puzzle.title} className="image-card"/>
              <h3>{puzzle.title}</h3>
              <p>Content: {puzzle.content}</p>
              <p>Author: {puzzle.author}</p>
              <Link to={`/Puzzle/${puzzle._id}`}>Open The Puzzle</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
