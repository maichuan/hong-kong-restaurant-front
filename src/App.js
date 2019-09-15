import React from 'react'
import RouterView from './router'
import { Route, BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div>
        <Route
          component={() => {
            window.scrollTo(0, 0)
            return null
          }}
        />
        <RouterView />
      </div>
    </Router>
  )
}

export default App
