import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import AddPuzzleComp from '../../Components/Puzzele/AddPuzzleComp'

export default function AddNewPuzzle() {
  return (
    <div>
      <PageHeader title='new puzzle' subTitle='add new puzzle'/>
      <AddPuzzleComp/>
    </div>
  )
}
