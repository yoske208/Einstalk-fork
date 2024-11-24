import './App.css'
import CociProvider from './Provider/CociProvider'
import AppRoute from './routers/AppRoute'

function App() {

  return (
    <>
    <CociProvider>
    <AppRoute/>
    </CociProvider>
    </>
  )
}

export default App
