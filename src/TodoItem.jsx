function TodoItem({todo,toggleCompletion,deleteTodo}){
    return(
      <li className={todo.completed?"completed":""}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={()=>toggleCompletion(todo.id)}
        />
        <span onClick={()=>toggleCompletion(todo.id)}>{todo.text}</span>
        <button className="delete" onClick={()=>deleteTodo(todo.id)}>Delete</button>
      </li>
    )
  }
  
  export default TodoItem