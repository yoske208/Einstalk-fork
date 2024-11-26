import { Link, useParams } from 'react-router-dom'
import PuzzleComponent from '../components/PuzzleComponent'
import PageHeader from './PageHeader'
import { useContext } from 'react';
import { PuzzelContext } from '../Provider/PuzzelsProvider';

export default function Puzzle() {
    const { id } = useParams();
    const { puzzels } = useContext(PuzzelContext);
    const currentPuzlle = puzzels.find((p) => p._id === id);
  return (
    <>
    <PageHeader title='Puzzele'/>
    <button><Link to={"/puzzle/AddNewPuzzle"}>New Puzzle</Link></button>
    <PuzzleComponent currentPuzlle={currentPuzlle!}/>
    </>
)
}
