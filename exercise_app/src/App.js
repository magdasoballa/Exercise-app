import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import {Header} from './Header'
import {Item} from './Item'
import {List} from './List'
import {Search} from './Search'

export const App = () => {
return (
    <div className='container'>
    <Header/>
    <Search/>
    <List/>
    <Item/>
    </div>
)
}



