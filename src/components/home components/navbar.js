import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return(
    <div className="nav-links">
      <li>
          <Link to="/invoices">Invoices</Link>
        </li>
        <li>
          <Link to="/main">main</Link>
        </li>
    </div>
  )
}

export default Navbar;