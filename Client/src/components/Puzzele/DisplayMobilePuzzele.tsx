import React, { useEffect, useState } from 'react'
import { IPuzzels } from '../../Interface/Interfaces';
import { Link } from 'react-router-dom';

interface Props {
    puzzles: IPuzzels[];
  }

const DisplayMobilePuzzele = ({puzzles}:Props) => {
    const [wind , setWind] = useState(window.innerWidth < 640 )
    useEffect(()=>{
        window.addEventListener
    },[])
  return (
    <>
    {puzzles.map((puzzle) => (
        <div key={puzzle._id} className="card">
        <div>
          <img src={puzzle.img} alt={puzzle.title} className="image-card"/>
          <h3>{puzzle.title}</h3>
          <p>Content: {puzzle.content}</p>
          <p>Author: {puzzle.author}</p>
          <button style={{padding: '10px', background: '#db9f70', color: 'black'}}><Link to={`/Puzzle/${puzzle._id}`}>Open The Puzzle</Link></button>
        </div>
      </div>
    ))}

        
    </>
  )
}

export default DisplayMobilePuzzele