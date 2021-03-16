import { useSelector } from 'react-redux';
const LoadTodos = () => {
    const status = useSelector(state=>state?state.todoReducer:null)
    const todos = useSelector(state => state?state.todoReducer.todos:null)
    let showTodos
    const {showAll,showActive} = status
    if(showAll){
        showTodos = todos
    }
    else if(showActive){
        const show = todos.filter(todo=>todo.status ==='active')
        showTodos = show
    }
    else{
        const show = todos.filter(todo=>todo.status ==='completed')
        showTodos = show
    }
    return showTodos
};
export const LoadItemsLeft = () => {
    const todos = useSelector(state => state?state.todoReducer.todos:null)
    const left = todos.filter(todo=>todo.status==='active')
    return left.length 
}
export const LoadAllTodos = () => {
    const todos = useSelector(state => state?state.todoReducer.todos:null)
    return todos

}
export default LoadTodos;