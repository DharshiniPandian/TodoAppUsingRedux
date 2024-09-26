import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
import './Todo.css'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
  return (
    <div>
      {todos.length!==0 &&
      <div>
        <h2>Todos</h2>
        <div className='cont'>
        {todos.map((todo) => (
            <div key={todo.id} style={{display:'flex', gap: 20, alignItems:'center', justifyContent:'center'}} className='box'>
                <h4>{todo.text}</h4>
                <button onClick={() => dispatch(removeTodo(todo.id ))}>Delete</button>
            </div>
        ))}
        </div>
        </div>
      }
    </div>
  )
}

export default Todos