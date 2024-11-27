import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import AddNewPuzzle from "../Pages/AddNewPuzzle/AddNewPuzzle";
import Welcome from "../Pages/welcome/Welcome";
import Puzzle from "../Pages/Puzzele/Puzzle";
import Users from "../Pages/Users/Users";
import Profile from "../Pages/profile-page/Profile";
import AddNewUser from "../Pages/AddNewUser/AddNewUser";
import NotFound from "../Pages/NotFound/NotFound";
import LoginPage from "../Pages/Login/LoginPage";
import DialogComp from "../Components/Dialog-comp/DialogComp";
import { useContext, useEffect } from "react";
import { BooleanProps, isKeyPressContext } from "../Provider/CookieProvider";
import { AuthProvider } from "../Provider/AuthProvider";
import PrivateRoute from "../ProtacdetRouter/PrivateRouter";

export default function AppRoute() {
  const isAuth = useContext<BooleanProps>(isKeyPressContext);
  useEffect(() => {
    console.log(45);
    console.log(isAuth.isPress);
  }, [isAuth.isPress]);
  return (
    <div>
      {isAuth.isPress && <DialogComp />}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/welcome" element={<Welcome />}></Route>
        <Route path="/puzzle/:id" element={<Puzzle />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>}></Route>
        <Route path="/addNewUser" element={<AddNewUser />}></Route>
        <Route path="/puzzle/addNewPuzzle" element={<AddNewPuzzle />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/*" element={<NotFound />}></Route>

        {/* <Route path='/' element={<Home />}></Route> */}
      </Routes>
    </div>
  );
}
