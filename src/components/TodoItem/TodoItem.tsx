import React, { useContext } from 'react'
import { TodoContext } from '../../state/TodoContext'
import { TrashcanIcon, CheckCircleIcon } from '@primer/octicons-react'
import { Li, Button, Input } from './TodoItem.styles'

const TodoItem: React.FC<{ id: string }> = ({ id }) => {
  const {
    todos: { [id]: todo },
    setTodoContent,
    deleteTodo,
    toggleTodoDone,
  } = useContext(TodoContext)
  const { content } = todo
  return (
    <Li>
      <Button onClick={() => toggleTodoDone(id)}>
        <CheckCircleIcon />
      </Button>
      <Input
        type="text"
        id={id}
        value={content}
        onChange={(e) => setTodoContent(id, e.target.value)}
      />
      <Button onClick={() => deleteTodo(id)}>
        <TrashcanIcon />
      </Button>
    </Li>
  )
}

export default TodoItem
