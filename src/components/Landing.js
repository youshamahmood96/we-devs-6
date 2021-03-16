import React  from 'react';
import AllTodos from './allTodos/AllTodos';
import ControlPanel from './controlPanel/ControlPanel';
import Input from './input/Input';
import { LoadAllTodos } from './LoadTodos';

const Landing = () => {
    const todos = LoadAllTodos()
    return (
        <React.Fragment>
        <Input/>
        <AllTodos/>
        {todos.length?<ControlPanel/>:''}
        </React.Fragment>
    );

};

export default Landing;