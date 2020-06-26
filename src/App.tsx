import React from 'react'
import GlobalStyles from './styles/GlobalStyles'
import MainLayout from './layouts/MainLayout'
import { TodoProvider } from './state/TodoContext'
import AddTodo from './components/AddTodo'

function App() {
  return (
    <TodoProvider>
      <GlobalStyles />
      <MainLayout>
        <div>Todo List</div>
        <AddTodo />
      </MainLayout>
    </TodoProvider>
  )
}

export default App
