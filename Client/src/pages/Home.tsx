import { useContext } from 'react'
import DisplayPuzzles from '../components/DisplayPuzzles'
import { PuzzelContext } from '../Provider/PuzzelsProvider'



export default function Home() {
  const { puzzels } = useContext(PuzzelContext)
  if (puzzels) {
    return (
      <div>
        <DisplayPuzzles puzzles={puzzels}/>
      </div>
    )
  }
}
