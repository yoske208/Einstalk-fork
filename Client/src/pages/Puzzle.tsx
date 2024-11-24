import { Link } from 'react-router-dom'
import PuzzleComponent from '../components/PuzzleComponent'
import PageHeader from './PageHeader'
import AddNewPuzzle from './AddNewPuzzle/AddNewPuzzle'
import DisplayPuzzles from '../components/DisplayPuzzles'
import { useContext } from 'react'
import { PuzzelContext } from '../Provider/PuzzelsProvider'

export default function Puzzle() {
  return (
    <>
    <PageHeader title='Puzzele'/>
    <button><Link to={"/puzzle/AddNewPuzzle"}>new puzzle</Link></button>
    <PuzzleComponent id={""} />
    </>
)
}
