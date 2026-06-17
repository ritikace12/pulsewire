import { Link } from "react-router-dom";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { Dashboard } from "./Dashboard";
import "./Style.css"
export function Navbar() {
    return(
    <div className="Navbar" >
        <div className="logo">
        PulseWire
      </div>
        <div className="Navlinks">
        <Link to="/login">Login</Link>
        <Link to="/publish">Publish</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/">Dashbaord</Link>
        </div>
    </div>
    )
}
