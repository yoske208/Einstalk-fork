import React, { useContext } from 'react'
import { PuzzelContext } from '../../Provider/PuzzelsProvider'
import { IPuzzels } from '../../Interface/Interfaces'




const Carusela = () => {
    
    const [puzzele,setPuzzels] = useContext(PuzzelContext)
    const puzzeleIndex = puzzele[0]
    

    const nextIndex = (puzzele:IPuzzels[]) => {
        if(puzzeleIndex){
            puzzele[+1]
        }

    }
    
    const prevIndex = (puzzele:IPuzzels[]) => {
        const one = puzzele[length -1]
        if(one){
            puzzele[-1]
        }
    
    }

  return (
    <div>
        <button onClick={nextIndex}>next</button>
        <button onClick={prevIndex}>prev</button>
    </div>
  )
}

export default Carusela