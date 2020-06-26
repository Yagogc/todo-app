import React, { useState } from 'react'

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

const useTodos = (): TodoContextInterface => {
  const [todos, setTodos] = useState<Todos>({})

  const createTodo = (): void => {
    const id = `todoid_${new Date().getTime()}`

    todos[id] = {
      content: '',
      done: false,
    }
    setTodos({ ...todos })
  }

  const deleteTodo = (id: string): void => {
    delete todos[id]
    setTodos({ ...todos })
  }

  const setTodoContent = (id: string, content: string): void => {
    todos[id].content = content
    setTodos({ ...todos })
  }

  const toggleTodoDone = (id: string): void => {
    todos[id].done = !todos[id].done
    setTodos({ ...todos })
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
