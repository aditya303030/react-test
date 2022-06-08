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
import Main from "./components/main";
import Home from "./components/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/invoices" element={<Invoices />}></Route>
        <Route path="/main" element={<Main />}></Route>
      </Routes>
    </Router>     
  );
}

export default App;