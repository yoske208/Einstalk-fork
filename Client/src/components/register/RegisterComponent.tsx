import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function RegisterComponent() {
    const [username, setUserName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate()

    function handleSubmit() {

    }
  return (
    <div>
        
        <form onSubmit={handleSubmit} className={""}>
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            className={""}
            value={username}
            placeholder="username"
            onChange={(e) => setUserName(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            className={""}
            type={"password"}
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <button
              type="submit"
              className={""}
              onSubmit={() => handleSubmit}
            >
              Register
            </button>
            <button
              type="button"
              className={""}
              onClick={() => navigate('/')}
            >
              close
            </button>
          </div>
          <button onClick={() => <Link to="/login"></Link>}>Login</button>
        </form>
    </div>
  )
}
