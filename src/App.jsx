import {useState} from 'react'
import './App.css'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

function App(){
  const[todos,setTodos]=useState([])
  const addTodo=(todo)=>{
    setTodos([...todos,{id:Date.now(),text:todo,completed:false}])
  }
  const toggleCompletion=(id)=>{
    setTodos(
      todos.map((todo)=>
        todo.id===id?{ ...todo,completed:!todo.completed}:todo
      )
    )
  }
  const deleteTodo=(id)=>{
    setTodos(todos.filter((todo)=>todo.id!==id))
  }
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleCompletion={toggleCompletion}
        deleteTodo={deleteTodo}
      />
    </div>
  )
}
export default App