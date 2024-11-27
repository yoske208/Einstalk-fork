import { Link, useParams } from 'react-router-dom'
import PuzzleComponent from '../../Components/Puzzele/PuzzleComponent'
import PageHeader from '../../Pages/PageHeader/PageHeader'
import { useContext } from 'react';
import { PuzzelContext } from '../../Provider/PuzzelsProvider';
import DisplayMobilePuzzele from '../../Components/Puzzele/DisplayMobilePuzzele';

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
