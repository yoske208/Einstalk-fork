import { Link } from "react-router-dom";
import { IPuzzels } from "../Interface/Interfaces";


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
              <button style={{padding: '10px', background: '#db9f70', color: 'black'}}><Link to={`/Puzzle/${puzzle._id}`}>Open The Puzzle</Link></button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
