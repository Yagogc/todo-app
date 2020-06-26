import React from 'react'

const TodoContext = React.createContext({})

const TodoProvider: React.FC = ({ children }) => {
  return <TodoContext.Provider value={{}}>{children}</TodoContext.Provider>
}

export { TodoContext, TodoProvider }
