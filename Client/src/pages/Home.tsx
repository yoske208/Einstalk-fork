import { useContext } from 'react'
import DisplayPuzzles from '../components/DisplayPuzzles'
import { PuzzelContext } from '../Provider/PuzzelsProvider'



export default function Home() {
  const { puzzels } = useContext(PuzzelContext)
  if (puzzels) {
    return (
      <div>
        <h2>What puzzle will you be able to solve today?</h2>
        <DisplayPuzzles puzzles={puzzels}/>
      </div>
    )
  }
}
