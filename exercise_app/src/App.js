import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import {Header} from './Header'
import {Item} from './Item'
import {List} from './List'
import {AddTask} from './AddTask'
import { TasksToDo } from './Context'

export const App = () => {
return (
    <div className='container'>
    <Header/>
    <TasksToDo>
        <AddTask/>
        <List/>
    </TasksToDo>
    <Item/>
    </div>
)
}



