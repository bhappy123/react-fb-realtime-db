import React, { useState } from 'react'
import firebase from '../utill/firebase';

const Forms = () => {

    const [title, setTitle] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const createTodo = () => {
        const todoRef = firebase.database().ref('todo');

        const todo = {
            title,
            complete: false,
        }

        todoRef.push(todo);
    }

    return (
        <div>
            <input type="text" onChange={handleChange} />
            <button onClick={createTodo}>Submit</button>
        </div>
    )
}

export default Forms
