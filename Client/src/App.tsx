import './App.css'
import CookieProvider from './Provider/CookieProvider'
import Layout from './Layout/Layout'
import AppRoute from './routers/AppRoute'

function App() {

  return (
    <>
    <CookieProvider>
    <Layout children={<AppRoute/>}/>

    </CookieProvider>
    </>
  )
}

export default App
