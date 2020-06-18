import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

import DashboardRouter from "./dashboardRouter";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={DashboardRouter} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
