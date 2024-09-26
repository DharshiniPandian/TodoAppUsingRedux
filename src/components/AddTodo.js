import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'
import './Todo.css'

function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoToList = (e) =>{
        e.preventDefault()
        console.log(input)
        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <div>
        <h2>Add Todo</h2>
        <form onSubmit={addTodoToList} className='form'>
            <input 
              type='text' 
              placeholder='add todo' 
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default AddTodo