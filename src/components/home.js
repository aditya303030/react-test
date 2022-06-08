import React,{useState} from "react";
import '../App.css';
import Navbar from "./home components/navbar";

const Home = () => {
  //states
  const [Text,setText] = useState('');
  const InputTextHandler = (e) => {
    setText(e.target.value)
    console.log(e.target.value)
  }
  return (
    <div className="container">
      <Navbar />
      <h1>Home Page</h1>
      <input placeholder="input text" ></input>
      <button type="submit" onclick={InputTextHandler}>Submit</button>
      <h1>{Text}</h1>
    </div>
  );
};
  
export default Home;