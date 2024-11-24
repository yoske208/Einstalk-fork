import { useContext, useEffect } from 'react'
import { BooleanProps, isKeyPressContext } from '../Provider/CookieProvider'
import DialogComp from '../components/dialog-comp/DialogComp'
import LoginComp from '../components/loginComp/LoginComp'

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