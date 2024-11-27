import React, { createContext, useState, ReactNode, useEffect } from "react";
import useFatch from "../Hooks/useFetch";
import  {IUser} from "../Interface/Interfaces"



interface AuthContextType {
  user: IUser | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);

  const login = async (
    username: string,
    password: string
  ): Promise<boolean> => {
    const { postFetch } = useFatch("http://localhost:3030");
    try {
      const user = postFetch({ username, password });
      if (user) {
        setUser(await user);
        return true;
      }
    } catch (error) {
      return false;
    }

    return false;

    // try {
    //   const response = await fetch("http://localhost:8040/auth/login", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     credentials: "include", // חשוב בשביל קבלת הקוקיז
    //     body: JSON.stringify({ email, password }),
    //   });

    //   if (!response.ok) {
    //     return false;
    //   }

    //   const data = await response.json();
    //   if (data.foundUser) {
    //     setUser(data.foundUser);
    //     return true;
    //   }
    //   return false;
    // } catch (error) {
    //   console.error("Login failed", error);
    //   return false;
    // }
  };

  const logout = async () => {
    try {
      const response = await fetch("http://localhost:3030/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        setUser(null);
      }
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
