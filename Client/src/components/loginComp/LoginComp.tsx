import React, { useContext, useEffect, useState } from "react";
import Stiles from "./login.module.css";
import { Link } from "react-router-dom";
// import axios from 'axios'
import { BooleanProps, isKeyPressContext } from "../../Provider/CookieProvider";
import DialogComp from "../dialog-comp/DialogComp";
import useFatch from "../../Hooks/useFetch";
import { PuzzelProps } from "../../Provider/PuzzelsProvider";

const LoginComp = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [login, setLogin] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const isAuth = useContext<BooleanProps>(isKeyPressContext);
  const { postFetch } = useFatch<PuzzelProps[]>(
    "http://localhost:3040/auth/login"
  );

  useEffect(() => {
    console.log(45);
    console.log(isAuth.isPress);
  }, [isAuth.isPress]);
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent page reload
    if (login) {
      try {
        await postFetch({ username, password });
      } catch (error) {
        console.error("Login failed:", error);
      }
    }
    setLogin(false);
  };
  return (
    <>
      {isAuth.isPress && <DialogComp />}

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
          <label htmlFor="showPassword">הצג סיסמה</label>
          <input
            type="checkbox"
            id=""
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          <div>
            <button
              type="submit"
              className={Stiles.button}
              onClick={() => setLogin(true)}
            >
              Login
            </button>
            <button
              type="button"
              className={Stiles.button}
              onClick={() => isAuth.setIsPress(true)}
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
