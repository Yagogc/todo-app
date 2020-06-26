import React, { useContext } from 'react'
import { TodoContext } from '../../state/TodoContext'
import TodoItem from '../TodoItem'

const TodoList = () => {
  const { todos } = useContext(TodoContext)
  console.log('TodoList -> todos', todos)
  const todosIds = Object.keys(todos)
  if (todosIds.length === 0) {
    return <p>Add your first TODO</p>
  }
  return (
    <ul>
      {todosIds.reverse().map((id) => {
        return <TodoItem id={id} key={id} />
      })}
    </ul>
  )
}

export default TodoList
