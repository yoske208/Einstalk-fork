import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AddNewPuzzle from '../pages/AddNewPuzzle'
import Welcome from '../pages/Welcome'
import Puzzle from '../pages/Puzzle'
import Users from '../pages/Users'
import Profile from '../pages/Profile'
import AddNewUser from '../pages/AddNewUser'
import NotFound from '../pages/NotFound'
import LoginPage from '../pages/LoginPage'
import Register from '../pages/Register'

export default function AppRoute() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Welcome' element={<Welcome />}></Route>
            <Route path='/Users' element={<Users />}></Route>
            <Route path='/Puzzle/:id' element={<Puzzle/>} />
            <Route path='/Profile' element={<Profile />}></Route>
            <Route path='/addNewUser' element={<AddNewUser />}></Route>
            <Route path='/addNewPuzzle' element={<AddNewPuzzle />}></Route>
            <Route path='/login' element={<LoginPage/>}></Route>
            <Route path='/register' element={<Register/>} />
            <Route path='/*' element={<NotFound />}></Route>
            {/* <Route path='/' element={<Home />}></Route> */}
        </Routes>
    </div>
  )
}
