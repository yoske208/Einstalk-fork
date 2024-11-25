import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AddNewPuzzle from "../pages/AddNewPuzzle/AddNewPuzzle";
import Welcome from "../pages/welcome/Welcome";
import Puzzle from "../pages/Puzzle";
import Users from "../pages/Users";
import Profile from "../pages/profile-page/Profile";
import AddNewUser from "../pages/AddNewUser";
import NotFound from "../pages/NotFound";
import LoginPage from "../pages/LoginPage";
import DialogComp from "../components/dialog-comp/DialogComp";
import { useContext, useEffect } from "react";
import { BooleanProps, isKeyPressContext } from "../Provider/CookieProvider";

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
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/addNewUser" element={<AddNewUser />}></Route>
        <Route path="/puzzle/addNewPuzzle" element={<AddNewPuzzle />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/*" element={<NotFound />}></Route>

        {/* <Route path='/' element={<Home />}></Route> */}
      </Routes>
    </div>
  );
}
