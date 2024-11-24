import './App.css'
import CociProvider from './Provider/CociProvider'
import Layout from './Layout/Layout'
import AppRoute from './routers/AppRoute'

function App() {

  return (
    <>
    <CociProvider>
    <Layout children={<AppRoute/>}/>

    </CociProvider>
    </>
  )
}

export default App
