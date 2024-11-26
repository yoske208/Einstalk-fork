import { useContext } from 'react'
import DisplayPuzzles from '../components/DisplayPuzzles'
import { PuzzelContext } from '../Provider/PuzzelsProvider'
import PageHeader from './PageHeader'
import useFatch from '../Hooks/useFetch'
import { Link } from 'react-router-dom'


export default function Home() {
  const { puzzels } = useContext(PuzzelContext)
  if (puzzels) {
    return (
      <div>
        <h2>What puzzle will you be able to solve today?</h2>
        <button><Link to={"/puzzle/AddNewPuzzle"} >new puzzle</Link></button>
        <DisplayPuzzles puzzles={puzzels}/>

      </div>
    )
  }
}
