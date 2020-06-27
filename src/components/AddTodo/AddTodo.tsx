import React, { useContext } from 'react'
import { TodoContext } from '../../state/TodoContext'
import { PlusIcon } from '@primer/octicons-react'
import { Button } from './AddTodo.styles'

const AddTodo = () => {
  const { createTodo } = useContext(TodoContext)
  return (
    <Button type="submit" onClick={() => createTodo()}>
      <PlusIcon />
      <span>Add To Do</span>
    </Button>
  )
}

export default AddTodo
