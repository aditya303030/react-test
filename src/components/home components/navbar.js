import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return(
    <div className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/invoices">Invoices</Link></li>
      <li><Link to="/Contact">Contact</Link></li>
    </div>
  )
}

export default Navbar;