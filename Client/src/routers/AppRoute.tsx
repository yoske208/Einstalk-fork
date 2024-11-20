import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AddNewPuzzle from '../pages/AddNewPuzzle'

export default function AppRoute() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/addNewPuzzle' element={<AddNewPuzzle />}></Route>
        </Routes>
    </div>
  )
}
