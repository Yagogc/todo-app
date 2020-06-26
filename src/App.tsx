import React from 'react'
import GlobalStyles from './styles/GlobalStyles'
import MainLayout from './layouts/MainLayout'

function App() {
  return (
    <>
      <GlobalStyles />
      <MainLayout>
        <div>body</div>
      </MainLayout>
    </>
  )
}

export default App
