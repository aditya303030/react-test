import React from "react";
import { Link } from "react-router-dom";
import '../App.css'
// import { BrowserRouter } from "react-router-dom";

const Navbar = () => {
  return(
    <>
      <div className="navbar">
        <Link to="/invoices">Invoices</Link>
        <Link to="/expenses">Expenses</Link>
      </div>
    </>
  )
}

export default Navbar;