import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
// Components
import Header from "../components/Header";
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
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/create" component={AddExpense} />
        <Route exact path="/help" component={Help} />
        <Route exact path="/edit/:id" component={EditExpense} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
