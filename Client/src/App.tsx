import './App.css'
import Layout from './Layout/Layout'
import AppRoute from './routers/AppRoute'

function App() {

  return (
    <>
    <Layout children={<AppRoute/>}/>

    </>
  )
}

export default App
