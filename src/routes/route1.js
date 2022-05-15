import React, { useState } from "react";

const Route1 = () => {
  const [Input, setInput] = useState('')
  const UpdateState = (e) => {
    setInput(e.target.value)
    console.log(e.target.value)
  }
  return(
    <div className="body">
      <form>
        <input onChange={UpdateState}>{Input}</input>
      </form>
    </div>
  )
}

export default Route1;