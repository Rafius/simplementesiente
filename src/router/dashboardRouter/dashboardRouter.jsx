import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Dashboard,  About, Nutrition, Services, Ebook, Contact } from '../../sections'
import Home from '../../sections/home'

// import Dashboard from '../../sections/Dashboard'
const DashboardRouter = () => (
  <Dashboard>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About} />
      <Route path='/nutrition' component={Nutrition} />
      <Route path='/services' component={Services} />
      <Route path='/ebook' component={Ebook} />
      <Route path='/contact' component={Contact} />  
      
      <Redirect to='/' />
    </Switch>
  </Dashboard>
)

export default DashboardRouter

// background-color: #FFEDF9;
//     background-image: url(https://i.imgur.com/kHibdhX.png);
//     max-height: 300px;
//     /* display: flex; */
//     /* justify-content: center; */
//     /* align-items: center; */
//     /* position: absolute; */
//     /* left: 50%; */
//     /* margin: 0 auto; */
//     background-position: center;
//     background-repeat: no-repeat;