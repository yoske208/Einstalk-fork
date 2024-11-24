import { useContext, useState } from 'react'
import DisplayPuzzles from '../components/DisplayPuzzles'
import { IPuzzels } from '../Interface/Interfaces'
import { PuzzelContext } from '../Provider/PuzzelsProvider'

export default function Home() {
  const { puzzels, setPuzzels } = useContext(PuzzelContext)
  

  return (
    <div>
      <DisplayPuzzles puzzles={puzzels}/>
    </div>
  )
}
