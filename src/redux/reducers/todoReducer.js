import * as actionTypes from '../types/todoTypes'
let initialState ={
    todos:[],
    showAll:true,
    showActive:false,
    showCompleted:false
}
export const todoReducer =(state=initialState,action) =>{
    switch(action.type){
        case actionTypes.ADD_TODO:
            return{
                ...state,
                todos:[...state.todos,action.payload]
            }
        case actionTypes.COMPLETE_TODO:
            state.todos.forEach(todo =>{
                if(parseInt(todo.id)===parseInt(action.payload)){
                    todo.status = 'completed'
                }
            })
            return{
                ...state,
                todos:[...state.todos]
            }
        case actionTypes.EDIT_TODO:
            state.todos.forEach(todo =>{
                if(parseInt(todo.id)===parseInt(action.payload.id)){
                    todo.todo=action.payload.todo
                }
            })
            return{
                ...state,
                todos:[...state.todos]
            }
        case actionTypes.TOGGLE_ALL:
            return{
                ...state,
                showAll:true,
                showActive:false,
                showCompleted:false
            }
        case actionTypes.TOGGLE_ACTIVE:
        return{
            ...state,
            showAll:false,
            showActive:true,
            showCompleted:false
        }
        case actionTypes.TOGGLE_COMPLETED:
        return{
            ...state,
            showAll:false,
            showActive:false,
            showCompleted:true
        }
        case actionTypes.DELETE_COMPLETED:
            const filtered = state.todos.filter(todo=>todo.status ==='active')
        return{
            ...state,
            todos:filtered
        }
        default:
            return state
    }
}