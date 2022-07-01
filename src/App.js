import React,{useReducer, useState} from "react";
import './App.css';

const ACTIONS = {
  NEW_TODO: 'new_todo'
}

const reducer = (todos,action) => {
  switch(action.type){
    case ACTIONS.NEW_TODO:
      return [...todos,newTodos(action.payload.name)]
    default:
      return todos
  }
}

const newTodos = (name) => {
  return {id:Math.random(),name:name, completed:false}
}

function App() {
  const [todos,dispatch] = useReducer(reducer,[])
  const [name,setName] = useState('')
  
  const HandleSubmit = (e) => {
    e.preventDefault()
    dispatch({type:ACTIONS.NEW_TODO,payload: {name:name}})
    setName('')
  }
  
  console.log(todos)
  return(
    <>
      <form onSubmit={HandleSubmit}>
        <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
        <ul>
          {todos.map((key,value)=> {
            return <li key="{todos.name}">{todos.name}</li>
          })}
        </ul>
      </form>
    </>
  )
}

export default App;