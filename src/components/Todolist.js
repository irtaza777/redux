import React from 'react'
import { UseSelector,useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
function Todolist() {
    const todos=useSelector(state=>state.todos)
    const dispatch=useDispatch();
  return (
    <div>
      {todos.map((todo)=>
<li key={todo.id}> 
{todo.name}
<button onClick={()=>dispatch(removeTodo(todo.id))} >X</button>
</li>
      )}
    </div>
  )
}

export default Todolist
