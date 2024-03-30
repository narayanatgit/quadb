import React, { useCallback } from 'react'
import { UseDispatch, useDispatch, useSelector } from 'react-redux'
import { removetodo } from './compoenets/Reducer'

import Del from './delete.png'
const List = () => {


    var style
    const all=useSelector(state=>state.allod)
  
    const dispatch=useDispatch()

    const sty=()=>
    {
        style={

            background: "#888",
            color: "#fff",
            textDecoration:"line-through"
        }
    }
  return (<>
    { all.all.map((item)=>(

       
        (item.text!=''&&
          (<div class="item">
        <input type="checkbox" name="checkbox"  ></input>
          <p key={item.id} style={style} onClick={sty}>{item.text}  <img  src={Del}   onClick={()=>dispatch(removetodo(item.id))} style={{position:"absolute",left:"60%"}}width="25"alt=""/></p>
          
      </div>)))
      )} 
      </>
  )
}

export default List