import {
  getTodosInLocalStorage,
  setTodosInLocalStorage,
  TODOS_KEY,
} from './localStorage'

const mockTodos = {
  1: {
    content: '',
    done: false,
  },
  2: {
    content: '',
    done: true,
  },
}

// TODO: Add TS types

afterEach(() => {
  localStorage.clear()
})

test('gets the todos from the localStorage', () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(mockTodos))
  const result = getTodosInLocalStorage()

  expect(localStorage.getItem).toHaveBeenLastCalledWith(TODOS_KEY)
  expect(result).toMatchObject(mockTodos)
})

test('sets the todos in the localStorage', () => {
  expect(localStorage.getItem(TODOS_KEY)).toBeNull()

  setTodosInLocalStorage(mockTodos)

  const todosAsString = JSON.stringify(mockTodos)

  expect(localStorage.setItem).toHaveBeenLastCalledWith(
    TODOS_KEY,
    todosAsString
  )
  expect(localStorage.getItem(TODOS_KEY)).toEqual(todosAsString)
})
