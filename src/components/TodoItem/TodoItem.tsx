import React, { useContext } from 'react'
import { TodoContext } from '../../state/TodoContext'

const TodoItem: React.FC<{ id: string }> = ({ id }) => {
  const {
    todos: { [id]: todo },
    setTodoContent,
  } = useContext(TodoContext)
  const { content } = todo
  return (
    <li>
      <input
        type="text"
        id={id}
        value={content}
        onChange={(e) => setTodoContent(id, e.target.value)}
      />
    </li>
  )
}

export default TodoItem
