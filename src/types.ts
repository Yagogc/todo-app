export interface Todo {
  content: string
  done: boolean
}

export type Todos = Record<string, Todo>

export interface TodoContextInterface {
  todos: Todos
  createTodo: () => void
  deleteTodo: (id: string) => void
  setTodoContent: (id: string, content: string) => void
  toggleTodoDone: (id: string) => void
}
