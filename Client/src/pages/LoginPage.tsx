import { useContext, useEffect } from 'react'
import LoginComp from '../components/loginComp/LoginComp'
import { BooleanProps, isKeyPressContext } from '../Provider/CociProvider'
import DialogComp from '../components/dialog-comp/DialogComp'

const LoginPage = () => {
  const isAuth = useContext<BooleanProps>(isKeyPressContext)
  useEffect(()=>{
    console.log(45);
    console.log(isAuth.isPress);
  },[isAuth.isPress])

  return (
    <>
    {isAuth.isPress && <DialogComp/>}
    <h1>LoginPage</h1>
    <LoginComp/>
    </>
  )
}

export default LoginPage