import { Link, NavLink, useNavigate } from "react-router-dom";
import ProfileComp from "./profile-heder/ProfileComp";
import { useContext } from "react";
import { UserConntext } from "../../Provider/UserProvider";
import useFatch from "../../Hooks/useFetch";


const Header = () => {
  const { getFatch} = useFatch<any>('http://localhost:3040/auth/logout')
  const userContext = useContext(UserConntext)
  const navigate = useNavigate()
  return (
    <>
      <header>
        <h1>Puzzles app</h1>
        {userContext?.user && <ProfileComp/>}
        <div className="login_register">
        <button
        onClick={async ()=>{
          if(userContext?.user){
            await getFatch()
            userContext.setUser(null)
          }
          else{
            navigate('/login')
          }
        }}
        >{userContext?.user ? 'logout': 'login'}</button>
        <button><Link to={"/addNewUser"}></Link>register</button>
        </div>
        

        <div className="navlink">
        <NavLink to={'/Welcome'}>Welcome</NavLink>
        <NavLink to={'/'}>EinsTalk</NavLink>
        <NavLink to={'/Profile'}>Profile</NavLink>
        {/* <NavLink to={'/Users'}>Users</NavLink> */}

         
        </div>
      </header>
    </>
  );
};

export default Header;
