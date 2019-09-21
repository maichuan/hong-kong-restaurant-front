import React from 'react'
import { Route } from 'react-router-dom'

import Home from '../pages/Home'
import Menus from '../pages/Menus'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/menus',
    exact: true,
    component: Menus,
  },
]

export default () => (
  <>
    {routes.map((route, i) => (
      <Route key={i} {...route} />
    ))}
  </>
)
