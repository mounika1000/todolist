import {useState}from 'react'

function TodoInput({addTodo}){
  const[input,setInput]=useState('')
  const handleInputChange=(e)=>{
    setInput(e.target.value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    if (input.trim()){
      addTodo(input)
      setInput('')
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Add a new task"
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default TodoInput