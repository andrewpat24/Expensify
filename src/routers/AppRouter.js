import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
import PrivateRoute from "./PrivateRoute";
// Components
import NotFound from "../components/NotFound";
import Help from "../components/Help";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import AddExpense from "../components/AddExpense";
import EditExpense from "../components/EditExpense";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/help" component={Help} />

        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/create" component={AddExpense} />
        <PrivateRoute exact path="/edit/:id" component={EditExpense} />

        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
