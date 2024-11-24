import React, { useState } from "react";
import { IUser } from "../Interface/Interfaces";

export interface Props {
  children: React.ReactNode;
}

export interface UserProps {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

export const UserLogContext = React.createContext<UserProps>({
  user: null,
  setUser: () => {}
});

const UserLogProvider = ({ children }: Props) => {
  const [user, setUser] = useState<IUser | null>(null);
  return (
    <div>
      <UserLogContext.Provider value={{ user, setUser }}>
        {children}
      </UserLogContext.Provider>
    </div>
  );
};

export default UserLogProvider



// import {SetStateAction, createContext,useState} from 'react'
// export interface Props {
//   children: React.ReactNode;
// }

// export interface BooleanProps {
//   isPress: boolean;
//   setIsPress: React.Dispatch<SetStateAction<boolean>>;
// }
// export const isKyePressContext = createContext<BooleanProps>({
//   isPress: false,
//   setIsPress: () => {},
// })
// const CociProvider = ({children}:Props) => {
//   const [isPress, setIsPress] = useState<boolean>(false)
//   return (
//     <isKyePressContext.Provider value={{isPress, setIsPress}}>
//       {children}
//     </isKyePressContext.Provider>
//   )
// }

// export default CociProvider