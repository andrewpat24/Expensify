import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// Router
import AppRouter from './routers/AppRouter';
// Redux
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
// Styles
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import 'react-dates/initialize';

const store = configureStore(); 

store.dispatch(addExpense({
    description: 'Water Bill', 
    amount: 8000, 
    createdAt: 1000
}));

store.dispatch(addExpense({
    description: 'Gas Bill', 
    amount: 4000, 
    createdAt: 1500
}));

store.dispatch(addExpense({
    description: 'Rent Bill', 
    amount: 15000, 
    createdAt: 500
}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters); 

console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter /> 
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));