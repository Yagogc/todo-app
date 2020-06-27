import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TodoContext } from '../../state/TodoContext'
import TodoItem from './TodoItem'

const mockCreateTodo = jest.fn()
const mockDeleteTodo = jest.fn()
const mockSetTodoContent = jest.fn()
const mockToggleTodoDone = jest.fn()

const mockTodo = {
  '1': {
    content: 'Mock Todo',
    done: false,
  },
}

const TodoProvider: React.FC = ({ children }) => {
  const mockContext = {
    todos: mockTodo,
    createTodo: mockCreateTodo,
    deleteTodo: mockDeleteTodo,
    setTodoContent: mockSetTodoContent,
    toggleTodoDone: mockToggleTodoDone,
  }
  return (
    <TodoContext.Provider value={mockContext}>{children}</TodoContext.Provider>
  )
}

describe('TodoList component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render a message when there is no todos', () => {
    render(<TodoItem id="1" />, { wrapper: TodoProvider })

    userEvent.click(screen.getByTestId('check'))

    expect(mockToggleTodoDone).toHaveBeenCalledWith('1')
  })

  it('should render a message when there is no todos', () => {
    render(<TodoItem id="1" />, { wrapper: TodoProvider })

    userEvent.type(screen.getByTestId('input'), 'todo')

    expect(mockSetTodoContent).toHaveBeenCalledWith('1', 'todo')
  })

  it('should render a message when there is no todos', () => {
    render(<TodoItem id="1" />, { wrapper: TodoProvider })

    userEvent.click(screen.getByTestId('remove'))

    expect(mockDeleteTodo).toHaveBeenCalledWith('1')
  })
})
