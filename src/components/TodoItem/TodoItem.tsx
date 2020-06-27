import React, { useContext } from 'react'
import { TodoContext } from '../../state/TodoContext'
import { TrashcanIcon, CheckCircleIcon } from '@primer/octicons-react'
import { Li, Input, CheckButton, DeleteButton } from './TodoItem.styles'

const TodoItem: React.FC<{ id: string }> = ({ id }) => {
  const {
    todos: { [id]: todo },
    setTodoContent,
    deleteTodo,
    toggleTodoDone,
  } = useContext(TodoContext)
  const { content, done } = todo
  return (
    <Li data-testid="todo-item">
      <CheckButton
        done={done}
        onClick={() => toggleTodoDone(id)}
        title={done ? 'Undone' : 'Done'}
        role="checkbox"
        aria-checked={done ? 'true' : 'false'}
        data-testid="check"
      >
        <CheckCircleIcon />
      </CheckButton>
      <Input
        type="text"
        disabled={done}
        id={id}
        value={content}
        onChange={(e) => setTodoContent(id, e.target.value)}
        title="To Do"
        data-testid="input"
      />
      <DeleteButton
        onClick={() => deleteTodo(id)}
        title="Remove"
        data-testid="remove"
      >
        <TrashcanIcon />
      </DeleteButton>
    </Li>
  )
}

export default TodoItem
