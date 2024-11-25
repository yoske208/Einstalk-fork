import { useContext, useEffect } from 'react'
import DisplayPuzzles from '../components/DisplayPuzzles'
import { PuzzelContext } from '../Provider/PuzzelsProvider'
import PageHeader from './PageHeader'
import useFatch from '../Hooks/useFetch'


export default function Home() {
  const { puzzels } = useContext(PuzzelContext)
  if (puzzels) {
    return (
      <div>ecwsdcsdcvwsvev
        <DisplayPuzzles puzzles={puzzels}/>
      </div>
    )
  }
}
