import React, { useContext, useState } from 'react'
import Stiles from'./login.module.css'
import { Link } from 'react-router-dom'
import useFatch from '../../Hooks/useFetch'
import { BooleanProps, isKeyPressContext } from '../../Provider/CookieProvider'
import { UserConntext, UserProps } from '../../Provider/UserProvider'

const LoginComp = () => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [login, setLogin] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const { postFetch} = useFatch<UserProps[]>('http://localhost:3040/auth/login')
    const isAuth = useContext<BooleanProps>(isKeyPressContext)
    const userConntext = useContext<UserProps>(UserConntext)
    
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault(); // Prevent page reload
        if(login){
            try{
              const res = await postFetch({username,password})
              userConntext?.setUser(res.userMan)
              console.log(userConntext?.user);
              
            }catch (error: any) {
                console.error("Login failed:", error);
            }
        }
        setLogin(false)
      }

  return (
    <>
    <div >
    <div className="form-container">
      <form onSubmit={handleSubmit}
      className={Stiles.form}>
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
      </div>
    </>
  );
};

export default LoginComp
