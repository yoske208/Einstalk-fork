import { Link, useParams } from 'react-router-dom'
import PuzzleComponent from '../components/PuzzleComponent'
import PageHeader from './PageHeader'
import AddNewPuzzle from './AddNewPuzzle/AddNewPuzzle'
import DisplayPuzzles from '../components/DisplayPuzzles'
import { useContext } from 'react'
import { PuzzelContext } from '../Provider/PuzzelsProvider'

export default function Puzzle() {
    const { id } = useParams();
    const { puzzels } = useContext(PuzzelContext);
    const currentPuzlle = puzzels.find((p) => p._id === id);
  return (
    <>
    <PageHeader title='Puzzele'/>
    <button><Link to={"/puzzle/AddNewPuzzle"}>new puzzle</Link></button>
    <PuzzleComponent currentPuzlle={currentPuzlle!}/>
    </>
)
}
