import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Dashboard, Home, About, Team, Services, Ebook, Contact } from '../../sections'

const DashboardRouter = () => (
  <Dashboard>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/team' component={Team} />
      <Route path='/services' component={Services} />
      <Route path='/ebook' component={Ebook} />
      <Route path='/contact' component={Contact} />
      <Redirect to='/'/>
    </Switch>
  </Dashboard>
)

export default DashboardRouter