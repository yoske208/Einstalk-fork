import { useContext, useEffect } from 'react'
import DisplayPuzzles from '../components/DisplayPuzzles'
import { PuzzelContext } from '../Provider/PuzzelsProvider'
import PageHeader from './PageHeader'
import useFatch from '../Hooks/useFetch'


export default function Home() {
  const { puzzels } = useContext(PuzzelContext)
  if (puzzels) {
    return (
      <div>
        <h1>What puzzle will you be able to solve today?</h1>
        <DisplayPuzzles puzzles={puzzels}/>
      </div>
    )
  }
}
