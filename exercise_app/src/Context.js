import React, {createContext, useState} from 'react';


export const TodoContext = createContext({
    todos: null,
    handleRemove: () => {},
    handleAdd: () => {},
});

export const TasksToDo = (props) => {
    const [todos, setTodos] = useState([
        {id: 1, title: 'Write some code'},
        {id: 2, title: 'Make a dinner'},
        {id: 3, title: 'Wash the car'}
    ])

    const handleAdd = (task) => {
            const newTasks = [...todos, {id: todos.length + 1, title: task}]
            setTodos(newTasks)
        }


    const handleRemove = (id) => {
        setTodos(todos.filter(el => el.id !== id))

    }

    return  <TodoContext.Provider value={{todos,handleRemove,handleAdd}}>
                {props.children}
            </TodoContext.Provider>
}