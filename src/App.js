import React,{useReducer, useState} from "react";
import './App.css';
import Todo from "./todo";

const ACTIONS = {
  NEW_TODO: 'new_todo',
  TOGGLE_TODO: 'toggle_todo',
  DELETE_TODO:'delete_todo'
}
export {ACTIONS}

const reducer = (todos,action) => {
  switch(action.type){
    case ACTIONS.NEW_TODO:
      return [...todos,newTodos(action.payload.name)]
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo=> {
        if (todo.id===action.payload.id) {
          return{...todo,complete:!todo.complete}
        }
        return todo; 
      })
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo=> todo.id !== action.payload.id)
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
      </form>
      {todos.map(todo => {
        return <Todo key = {todo.id} todo={todo} dispatch = {dispatch} />
      })}
    </>
  )
}

export default App;