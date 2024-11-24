import { useContext, useEffect } from 'react'
import DisplayPuzzles from '../components/DisplayPuzzles'
import { PuzzelContext } from '../Provider/PuzzelsProvider'
import PageHeader from './PageHeader'
import useFatch from '../Hooks/hookFetch'


export default function Home() {
  const {puzzels,setPuzzels} = useContext(PuzzelContext)
 
  
  

  return (
    <div>
      <PageHeader title='Home page' subTitle='all puzzels'/>
      <DisplayPuzzles puzzles={puzzels}/>

    </div>
  )
}
