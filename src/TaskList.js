import React, { useEffect, useState } from 'react'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import Del from './delete.png'
import { removetodo } from './compoenets/Reducer'
import { alltodo } from './compoenets/Reducer'
const TaskList = () => {
    
    
    const todos=useSelector(state=>state.todos)
   
    const dispatch=useDispatch()
     
    const localStorageItems = [];
    
     var to

       useEffect(()=> {
       
         todos.map((item)=>
         {
            if(item.text!='')
            {
            
          localStorage.setItem(JSON.stringify(item.id),JSON.stringify(item))}
         })


         
    },
       
       
       [todos])

      
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          const value = JSON.parse(localStorage.getItem(key));
             if(value.text!='')
             {
          localStorageItems.push(value)};
        }
    
       
        dispatch(alltodo(localStorageItems))
 
       

  return (
    <>
    


</>
    
        
  )
}

export default TaskList