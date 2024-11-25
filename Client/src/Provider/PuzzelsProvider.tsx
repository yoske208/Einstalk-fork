
import { IPuzzels } from "../Interface/Interfaces";
import useFatch from "../Hooks/useFetch";
import React, { SetStateAction, useEffect, useState } from "react";
const url = "http://localhost:3040/post"


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
  const {getFatch,data} = useFatch<IPuzzels[]>(url)
  useEffect(()=>{
    getFatch()

  },[])

  useEffect(() => {
    if (data) return setPuzzels(data);
    console.log("no results");
  }, [data]);
  




  return (
    <div>
      <PuzzelContext.Provider value={{ puzzels, setPuzzels }}>
        {children}
      </PuzzelContext.Provider>
    </div>
  );
};

export default PuzzelsProvider;
