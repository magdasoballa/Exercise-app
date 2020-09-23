import React, {useState} from 'react';
import { TodoContext} from './Context'

export const AddTask = () => {
    const {handleAdd} = React.useContext(TodoContext)
    const[input,setInput] = useState('')


    return (
             <form>
                <input
                    type='text'
                    value={input}
                    onChange={(e => setInput(e.target.value))}
                    placeholder='Enter task'
                />
                <button
                    onClick= {e=>{e.preventDefault()
                                handleAdd(input)
                                setInput('')}
                    }

                    type="submit"
                > Add
                </button>
            </form>
    )

}