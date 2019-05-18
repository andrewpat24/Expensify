import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// Router
import AppRouter from "./routers/AppRouter";
// Redux
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import getVisibleExpenses from "./selectors/expenses";
// Styles
import "./styles/styles.scss";
import "normalize.css/normalize.css";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

store.dispatch(
  addExpense({
    description: "Water Bill",
    amount: 8000,
    createdAt: 1556694001000
  })
);

store.dispatch(
  addExpense({
    description: "Gas Bill",
    amount: 4000,
    createdAt: 1556694001500
  })
);

store.dispatch(
  addExpense({
    description: "Rent Bill",
    amount: 15000,
    createdAt: 1556694000500
  })
);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
