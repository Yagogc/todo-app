const TODOS_KEY = 'TODOS'

interface Todo {
  content: string
  done: boolean
}

type Todos = Record<string, Todo>

const setTodosInLocalStorage = (todos: Todos): void =>
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos))

const getTodosInLocalStorage = (): Todos => {
  const todos = localStorage.getItem(TODOS_KEY)

  if (todos) return JSON.parse(todos)

  return {}
}

export { setTodosInLocalStorage, getTodosInLocalStorage, TODOS_KEY }
