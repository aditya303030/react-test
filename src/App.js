import React,{ useState} from "react";
import './App.css';

import { BrowserRouter } from "react-router-dom";
// import Main from './components/main';

import Navbar from "./components/navbar";

function App() {  
  let time = new Date().toLocaleTimeString()
  //states
  const [ctime, setcTime] = useState(time)
  const CurrentTime = () => {
    time = new Date().toLocaleTimeString()
    setcTime(time)
  }
  setInterval(() => {
    CurrentTime()
  }, 1000);
  return (
    <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>     
      <div>{ctime}</div>
    </>
  );
}

export default App;
