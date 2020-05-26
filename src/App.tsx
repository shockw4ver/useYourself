import React from 'react'
import { Provider } from 'mobx-react'
import { AppRoutes } from './routes'
import { appState } from './models'

function App() {
  return (
    <Provider { ...appState }>
      <AppRoutes />
    </Provider>
  )
}

export default App
