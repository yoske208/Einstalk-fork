import { useParams } from 'react-router-dom'
import PuzzleComponent from '../components/PuzzleComponent'
import { useContext } from 'react';
import { PuzzelContext } from '../Provider/PuzzelsProvider';


export default function Puzzle() {
    const { id } = useParams();
    const { puzzels } = useContext(PuzzelContext);
    const currentPuzlle = puzzels.find((p) => p._id === id);
  return (
    <PuzzleComponent currentPuzlle={currentPuzlle!} />
  )
}
