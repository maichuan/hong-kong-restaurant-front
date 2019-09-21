import React from 'react'
import RouterView from './router'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/common/Navbar'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
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
