import React, { useContext } from 'react'
import { TodoContext } from '../../state/TodoContext'
import TodoItem from '../TodoItem'
import { P, Ul } from './TodoList.styles'

const TodoList = () => {
  const { todos } = useContext(TodoContext)
  const todosIds = Object.keys(todos)

  if (todosIds.length === 0) {
    return <P data-testid="add-message">Add your first TODO</P>
  }
  return (
    <Ul data-testid="todo-list">
      {todosIds.reverse().map((id) => {
        return <TodoItem id={id} key={id} />
      })}
    </Ul>
  )
}

export default TodoList
