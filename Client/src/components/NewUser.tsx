import React, { useState } from "react";

export default function NewUser() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = async (
    username: string,
    password: string
  ): Promise<boolean> => {
    try {
      const response = await fetch("http://localhost:3040/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        return false;
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Register failed" + error);
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    register(username, password);
    setUsername("");
    setPassword("");
  };
  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="userName">User Name</label>
            <input
              id="userName"
              type="text"
              value={username}
              placeholder="Enter your User Name"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="Password"
              type="text"
              value={password}
              placeholder="Enter your Password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <button type="submit">Add New User</button>
        </form>
      </div>
    </>
  );
}
