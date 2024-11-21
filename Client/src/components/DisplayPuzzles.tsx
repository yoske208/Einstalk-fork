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
              <h3>{puzzle.title}</h3>
              <p>Content: {puzzle.content}</p>
              <p>Author: {puzzle.author}</p>
            </div>
            <div>
              <h4>Comments:</h4>
              {puzzle.comments.length > 0 ? (
                <ul>
                  {puzzle.comments.map((comment, idx) => (
                    <li key={idx}>
                      <p>Comment: {comment.content}</p>
                      <p>Author: {comment.author}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No comments</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
