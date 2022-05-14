import React,{ useState} from "react";
import './App.css';
import Main from './components/main';

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
      <div>{ctime}</div>
    </>
  );
}

export default App;
