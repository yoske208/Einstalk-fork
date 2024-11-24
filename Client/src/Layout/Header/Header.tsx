import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <h3>Puzzels app</h3>

        <div className="navlink">
        <NavLink to={'/Welcome'}>Welcome</NavLink>
        <NavLink to={'/'}>EinsTalk</NavLink>
        <NavLink to={'/Puzzle'}>Puzzle</NavLink>
        <NavLink to={'/Profile'}>Profile</NavLink>
        <NavLink to={'/Users'}>Users</NavLink>

         
        </div>
      </header>
    </>
  );
};

export default Header;
