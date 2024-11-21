import React, { useContext } from 'react'
import { PuzzelContext } from '../Provider/PuzzelsProvider'



export default function PuzzleComponent(id: string) {
  const { puzzels } = useContext(PuzzelContext);
  const currentPuzlle = puzzels.find((p) => p._id === id)

  return (
    <div>{currentPuzlle?.title}</div>
  )
}
