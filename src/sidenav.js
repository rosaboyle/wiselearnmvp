import "./sidenav.css";

import { Link } from "react-router-dom";

export function SideNav() {
    return (
        <div className="sidenav">
            
        <Link className="sidenavlink" to="/">Home</Link>
        <Link className="sidenavlink" to="/mili">Miligram</Link>
        <Link className="sidenavlink" to="/splitlogin">SplitLogin</Link>
        <Link className="sidenavlink" to="/hello">Hello</Link>
        <Link className="sidenavlink" to="/watcha/1">Your Name</Link>
        </div>
    );
}

