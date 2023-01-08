import "./navbar.css";
import { Link } from "react-router-dom";
export function NavBar(){

    return <ul className="navul">
       <Link className="navli navlia" to="/">Home</Link>
        <Link className="navli navlia" to="/mili">Miligram</Link>
    <li style={{float:"right"}}><a class="navli navlia" href="#about">About</a></li>
  </ul>
}