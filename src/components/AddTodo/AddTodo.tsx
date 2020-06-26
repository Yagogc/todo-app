import React, { useContext } from 'react'
import { TodoContext } from '../../state/TodoContext'
import { Button } from './AddTodo.styles'

const AddTodo = () => {
  const { createTodo } = useContext(TodoContext)
  return (
    <Button type="submit" onClick={() => createTodo()}>
      Add todo
    </Button>
  )
}

export default AddTodo
