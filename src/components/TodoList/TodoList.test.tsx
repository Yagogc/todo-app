import React from 'react'
import { render, screen } from '@testing-library/react'
import { TodoContext } from '../../state/TodoContext'
import TodoList from './TodoList'
import { Todos } from '../../types'

const TodoProvider: React.FC<{ todos?: Todos }> = ({
  children,
  todos = {},
}) => {
  const mockContext = {
    todos,
    createTodo: () => jest.fn,
    deleteTodo: () => jest.fn,
    setTodoContent: () => jest.fn,
    toggleTodoDone: () => jest.fn,
  }
  return (
    <TodoContext.Provider value={mockContext}>{children}</TodoContext.Provider>
  )
}

describe('TodoList component', () => {
  it('should render a message when there is no todos', () => {
    render(<TodoList />, { wrapper: TodoProvider })
    screen.getByTestId('add-message')
  })

  it('should render the specified number of todos', () => {
    const todos = {
      '1': {
        content: '',
        done: false,
      },
      '2': {
        content: '',
        done: true,
      },
    }
    render(<TodoList />, {
      wrapper: ({ children }) => TodoProvider({ children, todos }),
    })
    screen.getByTestId('todo-list')
    expect(screen.queryAllByTestId('todo-item')).toHaveLength(2)
  })
})
