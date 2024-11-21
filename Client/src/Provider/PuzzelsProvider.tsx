import React, { SetStateAction, useState } from "react";
import { IPuzzels } from "../Interface/Interfaces";

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
  return (
    <div>
      <PuzzelContext.Provider value={{ puzzels, setPuzzels }}>
        {children}
      </PuzzelContext.Provider>
    </div>
  );
};

export default PuzzelsProvider;
