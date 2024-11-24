import { useContext } from 'react'
import DisplayPuzzles from '../components/DisplayPuzzles'
import { PuzzelContext } from '../Provider/PuzzelsProvider'
import PageHeader from './PageHeader'

export default function Home() {
  const { puzzels } = useContext(PuzzelContext)
  

  return (
    <div>
      <PageHeader title='Home page'/>
      <DisplayPuzzles puzzles={puzzels}/>
    </div>
  )
}
