import React from 'react'
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'

import dashboardRouter  from './dashboardRouter'

const AppRouter = () => (
  <BrowserRouter>
    <Switch> 
      <Route path='/' component={dashboardRouter} />
      <Redirect to='/' />
    </Switch>
  </BrowserRouter>
)

export default AppRouter
