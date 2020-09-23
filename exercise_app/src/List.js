import React, {useState} from 'react';
import {Item} from './Item'
import DeleteIcon from '@material-ui/icons/Delete';
import {TodoContext} from './Context'


export const List = () => {
    const {todos} = React.useContext(TodoContext);
    const {handleRemove} = React.useContext(TodoContext);
    console.log(handleRemove)



    return  <ul className='list'>
                {todos.map(todo => <li key={todo.id}>
                        <Item  title={todo.title}/>
                        <DeleteIcon
                            className='icon'
                            onClick={()=>handleRemove(todo.id)}
                        />
                    </li>
                )
                }
            </ul>

}
