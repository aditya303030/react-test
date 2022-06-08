import React,{ useState} from "react";
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
// import Main from './components/main';
import Invoices from "./components/invoices";
import Contact from "./components/contact";
import Home from "./components/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/invoices" element={<Invoices />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </Router>     
  );
}

export default App;