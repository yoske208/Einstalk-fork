import { useContext } from 'react'
import DisplayPuzzles from '../components/DisplayPuzzles'
import { PuzzelContext } from '../Provider/PuzzelsProvider'

export default function Home() {
  const { puzzels } = useContext(PuzzelContext)
  

  return (
    <div>
      <DisplayPuzzles puzzles={puzzels}/>
    </div>
  )
}
