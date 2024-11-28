import {  useState } from "react";
import { IPuzzels } from "../../Interface/Interfaces";
import { Link } from "react-router-dom";

interface Props {
  puzzles: IPuzzels[];

}

const DisplayOnePuzzele = ({ puzzles }: Props) => {
  const [indexImage, setIndex] = useState(0);

  function nextindex() {
    setIndex((index) => {
      if (index === puzzles.length - 1) {
        return 0;
      }
      return index + 1;
    });
  }

  function backindex() {
    setIndex((index) => {
      if (index === 0) {
        return puzzles.length - 1;
      }
      return index - 1;
    });
  }

  return (
    <>
      <div className="card-list">
        <div key={puzzles[indexImage]._id} className="card">
              <div>
                <img
                  src={puzzles[indexImage].img}
                  alt={puzzles[indexImage].author}
                  className="image-card"
                />
                <h3>{puzzles[indexImage].title}</h3>
                <p>Content: {puzzles[indexImage].content}</p>
                <p>Author: {puzzles[indexImage].author}</p>
                <button
                  style={{
                    padding: "10px",
                    background: "#db9f70",
                    color: "black",
                  }}
                >
                <Link to={`/Puzzle/${puzzles[indexImage]._id}`}>Open The Puzzle</Link>
                </button>
                <button onClick={backindex}
                // disabled={indexImage === 0}
                >Back 👈{"<---"}</button>
                <button onClick={nextindex}
                // disabled={indexImage === puzzles.length -1}
                >Next 👉{"--->"}</button>
              </div>
            </div>
        
        
      </div>
    </>
  );
};

export default DisplayOnePuzzele;
