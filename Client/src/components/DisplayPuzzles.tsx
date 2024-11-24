import { useFetcher } from "react-router-dom";
import  { IPuzzels } from "../Interface/Interfaces";
import useFatch from "../Hooks/hookFetch";
import { useContext, useEffect, useState } from "react";
import { PuzzelContext } from "../Provider/PuzzelsProvider";
const url = "http://localhost:3030/post"



interface Props {
  puzzles: IPuzzels[];
}

export default function DisplayPuzzles({ puzzles }: Props) {
  const {puzzels} = useContext(PuzzelContext)
  if(puzzels){

  return (
    <>
      <div className="card-list">
        {puzzles.map((puzzle) => (
          <div key={puzzle._id} className="card">
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

