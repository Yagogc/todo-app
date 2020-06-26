import React from 'react'

const TodoItem: React.FC<{ id: string }> = ({ id }) => {
  return (
    <li>
      <input type="text" name="" id={id} />
    </li>
  )
}

export default TodoItem
