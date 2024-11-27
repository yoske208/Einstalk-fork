import Footer from "../Layout/Footer/Footer"
import Header from "./Header/Header"
import Main from "../Layout/main/main"
// import Users from "./Main/User/Users"

interface Props {
  children: React.ReactNode
}

const Layout = ({children} : Props) => {
  // const [name, setname] = useState("Nimrod")
  // const [user, setuser] = useState([])

  

  return (
    <div className="app-container">
    <Header/>
    <Main children={children}   />
    <Footer/>
      
    </div>
  )
}

export default Layout
