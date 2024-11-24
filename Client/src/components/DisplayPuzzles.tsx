import { useFetcher } from "react-router-dom";
import  { IPuzzels } from "../Interface/Interfaces";
import useFatch from "../Hooks/hookFetch";
import { useEffect, useState } from "react";
const url = "http://localhost:3030/post"



interface Props {
  puzzles: IPuzzels[];
}

export default function DisplayPuzzles({ puzzles }: Props) {
  const [ puzzels,setPuzzels] = useState<IPuzzels[]>([])
  const { getFatch,data} = useFatch(url)

  useEffect(()=>{
    getFatch()

  },[])

  useEffect(() => {
    if (puzzles) return setPuzzels(data);
    console.log("no results");
  }, [puzzles]);

    console.log(puzzles)
    if(puzzles){

    
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
}
