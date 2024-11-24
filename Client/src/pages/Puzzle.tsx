import { Link } from 'react-router-dom'
import PuzzleComponent from '../components/PuzzleComponent'
import PageHeader from './PageHeader'
import AddNewPuzzle from './AddNewPuzzle/AddNewPuzzle'

export default function Puzzle() {
  return (
    <>
    <PageHeader title='Puzzele'/>
    <button><Link to={"/puzzle/AddNewPuzzle"}>new puzzle</Link></button>
    <PuzzleComponent id={""} />
    </>
)
}
