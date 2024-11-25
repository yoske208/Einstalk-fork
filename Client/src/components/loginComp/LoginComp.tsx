import React, { useContext, useState } from "react";
import Stiles from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
// import DialogComp from "../dialog-comp/DialogComp";
import useFatch from "../../Hooks/useFetch";
import { UserLogContext } from "../../Provider/CociProvider";
import { IUser } from "../../Interface/Interfaces";

interface loginDTO {
  userMan: IUser,
  token: string
}

const LoginComp = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { user, setUser} = useContext(UserLogContext);
  const { postFetch, data } = useFatch<loginDTO>("http://localhost:3040/auth/login");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent page reload
    try {
      await postFetch({ username, password });
      if (data?.userMan) {
        setUser(data?.userMan)
      }
      if (user) {
        navigate('/')
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className={Stiles.form}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className={Stiles.input}
            value={username}
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            className={Stiles.input}
            type={showPassword ? "text" : "password"}
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="">הצג סיסמה</label>
          <input
            type="checkbox"
            id="showPassword"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          <div>
            <button
              type="submit"
              className={Stiles.button}
              onSubmit={() => handleSubmit}
            >
              Login
            </button>
            <button
              type="button"
              className={Stiles.button}
              onClick={() => navigate('/')}
            >
              close
            </button>
          </div>
          <Link to="/addNewUser">sign up</Link>
        </form>
      </div>
    </>
  );
};

export default LoginComp;
