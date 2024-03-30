import {createSlice,nanoid} from '@reduxjs/toolkit'
import { startTransition } from 'react'


const initialState={

    todos:[],
    allod:[]
}

export const slice=createSlice(
    {
        name:'todo',
        initialState,
        reducers:{

            addtodo:(state,action)=>
            {
                const todo={id:nanoid(),
                text:action.payload}
                state.todos.push(todo)
            },
            alltodo:(state,action)=>
            {
             const alldo={all:action.payload}
             state.allod=alldo
            },
            removetodo:(state,action)=>
            {
                localStorage.removeItem(JSON.stringify(action.payload))
                state.allod.all=state.allod.all.filter((todo)=>
                 
                    {
                    return todo.id!=action.payload} 
                )
            }
           
        }

    }
)

export const {addtodo,alltodo,removetodo} =slice.actions

export default slice.reducer