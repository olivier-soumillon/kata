import React, { useState } from 'react'
import App from './App'

const AppContainer = () => {
  const [searchKey, setSearchKey] = useState('')

  return (
    <App
      searchKey={searchKey}
      setSearchKey={setSearchKey}
    />
  )
}

export default AppContainer
