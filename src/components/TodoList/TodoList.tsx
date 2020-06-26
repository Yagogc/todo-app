import React, { useContext } from 'react'
import { TodoContext } from '../../state/TodoContext'

const TodoList = () => {
  const { todos } = useContext(TodoContext)
  console.log('TodoList -> todos', todos)
  if (Object.keys(todos).length === 0) {
    return <p>Add your first TODO</p>
  }
  return <ul></ul>
}

export default TodoList
