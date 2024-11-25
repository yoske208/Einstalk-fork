import { Link } from "react-router-dom";
import { IPuzzels } from "../Interface/Interfaces";

interface Props {
  puzzles: IPuzzels[];
}

export default function DisplayPuzzles({ puzzles }: Props) {
  return (
    <>
      <div>
        {puzzles.map((puzzle, index) => (
          <div key={index}>
            <div>
              <img src={puzzle.img} alt={puzzle.title} />
              <h3>{puzzle.title}</h3>
              <p>Content: {puzzle.content}</p>
              <p>Author: {puzzle.author}</p>
            </div>
            <Link to={`/Puzzle/${puzzle._id}`}>Open The Puzzle</Link>
          </div>
        ))}
      </div>
    </>
  );
}
