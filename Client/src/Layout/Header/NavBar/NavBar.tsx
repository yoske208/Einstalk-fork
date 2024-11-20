import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
    <NavLink to={'/'}>EinsTalk</NavLink>
    <NavLink to={'/addNewPuzzle'}>Add Puzzle</NavLink>
    </>
  )
}
