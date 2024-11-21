import React, { useState } from "react";
import { IUser } from "../Interface/Interfaces";

export interface Props {
  children: React.ReactNode;
}

export interface UserProps {
  users: IUser[];
  setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
}

export const UserConntext = React.createContext<UserProps>({
  users: [],
  setUsers: () => {},
});

const UserProvider = ({ children }: Props) => {
  const [users, setUsers] = useState<IUser[]>([]);
  return (
    <div>
      <UserConntext.Provider value={{ users, setUsers }}>
        {children}
      </UserConntext.Provider>
    </div>
  );
};

export default UserProvider;
