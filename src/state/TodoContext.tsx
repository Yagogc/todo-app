import React, { useState } from 'react'
import {
  setTodosInLocalStorage,
  getTodosInLocalStorage,
} from '../utils/localStorage'

interface Todo {
  content: string
  done: boolean
}

type Todos = Record<string, Todo>

interface TodoContextInterface {
  todos: Todos
  createTodo: () => void
  deleteTodo: (id: string) => void
  setTodoContent: (id: string, content: string) => void
  toggleTodoDone: (id: string) => void
}

const todosInitialState = getTodosInLocalStorage()

const useTodos = (): TodoContextInterface => {
  const [todos, setTodos] = useState<Todos>(todosInitialState)

  const updateTodosState = (todos: Todos) => {
    setTodos({ ...todos })
    setTodosInLocalStorage(todos)
  }

  const createTodo = (): void => {
    const id = `todoid_${new Date().getTime()}`

    todos[id] = {
      content: '',
      done: false,
    }
    updateTodosState(todos)
  }
  const deleteTodo = (id: string): void => {
    delete todos[id]
    updateTodosState(todos)
  }

  const setTodoContent = (id: string, content: string): void => {
    todos[id].content = content
    updateTodosState(todos)
  }

  const toggleTodoDone = (id: string): void => {
    todos[id].done = !todos[id].done
    updateTodosState(todos)
  }

  return { todos, createTodo, deleteTodo, setTodoContent, toggleTodoDone }
}

const TodoContext = React.createContext<TodoContextInterface>({
  todos: {},
  createTodo: () => {},
  deleteTodo: () => {},
  setTodoContent: () => {},
  toggleTodoDone: () => {},
})

const TodoProvider: React.FC = ({ children }) => {
  const todos = useTodos()
  return <TodoContext.Provider value={todos}>{children}</TodoContext.Provider>
}

export { TodoContext, TodoProvider }
