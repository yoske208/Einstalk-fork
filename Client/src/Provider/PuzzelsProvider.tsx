import React, { SetStateAction, useEffect, useState } from "react";
import { IPuzzels } from "../Interface/Interfaces";
import useFatch from "../Hooks/useFetch";

export interface Props {
  children: React.ReactNode;
}

export interface PuzzelProps {
  puzzels: IPuzzels[];
  setPuzzels: React.Dispatch<SetStateAction<IPuzzels[]>>;
}

export const PuzzelContext = React.createContext<PuzzelProps>({
  puzzels: [],
  setPuzzels: () => {},
});

const PuzzelsProvider = ({ children }: Props) => {
  
  const [puzzels, setPuzzels] = useState<IPuzzels[]>([]);
  const { getFatch, data } = useFatch<IPuzzels[]>("http://localhost:3040/post")
  
  useEffect(() => {
    getFatch()
  },[])
  useEffect(() => {
    setPuzzels(data!)
  },[data])

  return (
    <div>
      <PuzzelContext.Provider value={{ puzzels, setPuzzels }}>
        {children}
      </PuzzelContext.Provider>
    </div>
  );
};

export default PuzzelsProvider;
