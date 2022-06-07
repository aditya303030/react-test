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


function App() {  
  // let time = new Date().toLocaleTimeString()
  // //states
  // const [ctime, setcTime] = useState(time)
  // const CurrentTime = () => {
  //   time = new Date().toLocaleTimeString()
  //   setcTime(time)
  // }
  // setInterval(() => {
  //   CurrentTime()
  // }, 1000);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/invoices" element={Invoices}></Route>    
        </Routes>
      </Router>     
    </>
  );
}

export default App;