import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import {addTodo} from '../features/todo/todoSlice'

function Addtodo() {
    const[input,setInput]=useState('');
    const dispatch =useDispatch();

    const Addtodo=(e)=>{
e.preventDefault();
dispatch(addTodo(input));
setInput('');

    }
  return (
    <div>
    <br></br>

    < div className="container">
        <form onSubmit={Addtodo}>
            <br></br>
            <div className="form-group">
                <input type="TEXT" className="form-control" placeholder="name"
                    value={input} onChange={(e)=>{setInput(e.target.value)}} required />

            </div>
           
            <br></br>
            <button  type="submit" className="btn btn-success m-2">Add Todo</button>

        </form>
    </div>
</div>
  )
}

export default Addtodo
