import React from 'react'
import GlobalStyles from './styles/GlobalStyles'
import MainLayout from './layouts/MainLayout'
import { TodoProvider } from './state/TodoContext'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {
  return (
    <TodoProvider>
      <GlobalStyles />
      <MainLayout>
        <AddTodo />
        <TodoList />
      </MainLayout>
    </TodoProvider>
  )
}

export default App
