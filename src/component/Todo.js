import React from 'react'
import firebase from '../utill/firebase'
const Todo = ({ todo }) => {
    const remove = () => {
        const singleTodo = firebase.database().ref('todo').child(todo.id);
        singleTodo.remove();
    }

    const complete = () => {
        const singleTodo = firebase.database().ref('todo').child(todo.id);
        singleTodo.update({
            complete: !todo.complete,
        })
    }
    return (
        <div>
            <span style={{ textDecoration: todo.complete ? 'line-through' : 'none' }}>{todo.title}</span>
            <button onClick={remove}>delete</button>
            <button onClick={complete}>Complete</button>
        </div>
    )
}

export default Todo
