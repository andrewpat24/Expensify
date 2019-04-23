import React from 'react';
import ReactDOM from 'react-dom';
// Router
import AppRouter from './routers/AppRouter';
// Redux
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
// Styles
import './styles/styles.scss';
import 'normalize.css/normalize.css';

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

store.dispatch(setTextFilter('water'));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters); 

console.log(visibleExpenses);

ReactDOM.render(<AppRouter />, document.getElementById('app'));