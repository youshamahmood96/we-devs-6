import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { completeTodo, editTodo } from '../../redux/actions/todoActions';
import '../../App.css'
const SingleTodo = (props) => {
    const [toggle,setToggle] =useState(true)
    const {id,todo,status} = props.data
    const dispatch = useDispatch()
    const handleClick =()=>{
        setToggle(false)
    }
    const handleBlur =()=>{
        setToggle(true)
    }
    const handleChange = () => {
        dispatch(completeTodo(id))
    }
    const handleChangeInput = (e)=>{
        const data = {id,todo:e.target.value}
        dispatch(editTodo(data))
    }
     return (
         <form>
             <div className="form-check">
                 <input checked={status!=='active'?'checked':''} onChange={handleChange} name="todo" type="checkbox" className="form-check-input"  />
                 <label className={status ==='completed'?'form-check-label completed':'form-check-label'}>
                 {
                     status==='active'?(
                         <input  onChange={handleChangeInput} name="todo" className={toggle?"not-editable":""}  onBlur={handleBlur} readOnly={toggle} type="text" defaultValue={todo} onDoubleClick={handleClick} id=""/>
                     ):(todo)
                 }
                 </label>
             </div>
         </form>
     );
};

export default SingleTodo;