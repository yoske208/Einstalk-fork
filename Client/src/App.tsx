import './App.css'
import CookieProvider from './Provider/CookieProvider'
import Layout from './Layout/Layout'
import AppRoute from './Routers/AppRoute'
import { AuthProvider } from './Provider/AuthProvider'

function App() {

  return (
    <>
    <AuthProvider>
    <CookieProvider>
    <Layout children={<AppRoute/>}/>
    </CookieProvider>
    </AuthProvider>
    </>
  )
}

export default App
