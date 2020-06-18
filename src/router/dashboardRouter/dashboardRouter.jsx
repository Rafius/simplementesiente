import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {
  Dashboard,
  Home,
  About,
  Nutrition,
  Services,
  Ebook,
} from "../../sections";
import { ContactContainer } from "../../containers/ContactContainer";

const DashboardRouter = () => (
  <Dashboard>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/nutrition" component={Nutrition} />
      <Route path="/services" component={Services} />
      <Route path="/ebook" component={Ebook} />
      <Route path="/contact" component={ContactContainer} />

      <Redirect to="/" />
    </Switch>
  </Dashboard>
);

export default DashboardRouter;
