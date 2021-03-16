import * as actionTypes from '../types/todoTypes'
export const addTodo =(content) =>{
    return{
        type:actionTypes.ADD_TODO,
        payload:content
    }
}
export const completeTodo =(content) =>{
    return{
        type:actionTypes.COMPLETE_TODO,
        payload:content
    }
}
export const editTodo =(content) =>{
    return{
        type:actionTypes.EDIT_TODO,
        payload:content
    }
}
export const toggleAll = () =>{
    return{
        type:actionTypes.TOGGLE_ALL
    }
}
export const toggleActive = () =>{
    return{
        type:actionTypes.TOGGLE_ACTIVE
    }
}
export const toggleCompleted = () =>{
    return{
        type:actionTypes.TOGGLE_COMPLETED
    }
}
export const deleteCompleted = () =>{
    return{
        type:actionTypes.DELETE_COMPLETED
    }
}