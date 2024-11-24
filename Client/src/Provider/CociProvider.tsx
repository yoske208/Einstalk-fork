import {SetStateAction, createContext,useState} from 'react'
export interface Props {
  children: React.ReactNode;
}

export interface BooleanProps {
  isPress: boolean;
  setIsPress: React.Dispatch<SetStateAction<boolean>>;
}
export const isKyePressContext = createContext<BooleanProps>({
  isPress: false,
  setIsPress: () => {},
})
const CociProvider = ({children}:Props) => {
  const [isPress, setIsPress] = useState<boolean>(false)
  return (
    <isKyePressContext.Provider value={{isPress,setIsPress}}>
      {children}
    </isKyePressContext.Provider>
  )
}

export default CociProvider