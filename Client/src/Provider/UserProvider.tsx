import React, { createContext, useState } from "react";
import { IUser } from "../Interface/Interfaces";

export interface Props {
  children: React.ReactNode;
}

export interface UserProps {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

export const UserConntext = createContext<UserProps| null>(null);

const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<IUser|null>(null);
  return (
    <div>
      <UserConntext.Provider value={{user, setUser}}>
        {children}
      </UserConntext.Provider>
    </div>
  );
};

export default UserProvider
