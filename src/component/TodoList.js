import React, { useEffect, useState } from 'react'
import firebase from '../utill/firebase'
import Todo from './Todo';

const TodoList = () => {

    const [todoList, setTodoList] = useState([])

    const todoRef = firebase.database().ref('todo');


    useEffect(() => {
        todoRef.on('value', (snapshot) => {
            const todos = snapshot.val()
            const temp = [];
            for (let id in todos) {
                temp.push({ id, ...todos[id] })
            }
            setTodoList(temp)
        })
    }, [])

    return (
        <div>
            {todoList.map((todo, index) => (
                <Todo key={index} todo={todo} />
            ))}
        </div>
    )
}

export default TodoList
