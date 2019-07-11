import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// Router
import AppRouter from "./routers/AppRouter";
// Redux
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import getVisibleExpenses from "./selectors/expenses";
// Styles
import "./styles/styles.scss";
import "normalize.css/normalize.css";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
// Firebase
import { firebase } from "./firebase/firebase";
// Playground import
import "./playground/promises";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading..</p>, document.getElementById("app"));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById("app"));
});

firebase.auth().onAuthStateChanged(user => {
  console.log(user);
  if (user) {
    console.log("Logged in");
  } else {
    history.push("/");
  }
});
