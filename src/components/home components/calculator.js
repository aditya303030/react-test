import React from "react";
import "../../App.css"
import Answer from "./calculator components/answerbar";

const Calculator = () => {
  return(
    <div className="calc-container">
      <h1>Calculator</h1>
      <div className="calculator">
        <Answer />  
      </div>
    </div>
  )
}

export default Calculator;