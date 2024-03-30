import React, { useState } from 'react'
import { UseDispatch, useDispatch } from 'react-redux'
import { addtodo } from './compoenets/Reducer'
import './style.css'
const TaskInput = () => {

    const [Input,setInput]=useState('')
    const dispatch=useDispatch()

    const handlesubmit=(e)=>
    {
      
        dispatch(addtodo(Input))
        setInput('')

    }
  return (
    
    <form  class="item" >
			<input type="text" name="addItem" placeholder="EnterItem"  input={Input} onChange={(e)=>setInput(e.target.value)}/>
			<button  onClick={handlesubmit} name="list" >+</button>
		</form>

  )
}

export default TaskInput