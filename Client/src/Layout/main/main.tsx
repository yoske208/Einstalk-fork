import { Children, ReactNode } from "react";

interface Props {
  children: React.ReactNode
}

const Main = ({children}:Props) => {
  return (
    <>
      <main>
        {children}
        {/* <Users /> */}

        
      </main>
    </>
  );
};

export default Main;
