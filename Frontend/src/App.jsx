import {Login} from "./components/Login"
import {Signup} from "./components/Signup"
import {Publish} from "./components/Publish"
import { Navbar } from "./components/Navbar"
import {Dashboard} from "./components/Dashboard"
import {BrowserRouter , Routes , Route} from "react-router-dom"

function App() {


  return (
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/login" element={<Login/>}/>
     <Route path="/signup" element={<Signup/>}/>
     <Route path="/publish" element={<Publish/>}/>
      <Route path="/" element={<Dashboard/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App
