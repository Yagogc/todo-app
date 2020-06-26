import React from 'react'
import { LayoutContainer, Logo } from './MainLayout.styles'

const User: React.FC = ({ children }) => {
  return (
    <>
      <Logo>todo.app</Logo>
      <LayoutContainer>{children}</LayoutContainer>
    </>
  )
}

export default User
