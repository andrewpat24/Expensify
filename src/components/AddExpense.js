import React from 'react';
import { connect } from 'react-redux';
// Components
import ExpenseForm from './ExpenseForm';
// Helpers
import { addExpense } from '../actions/expenses';

const AddExpense = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
        onSubmit={(expense) => {
            props.dispatch( addExpense(expense) );
            props.history.push('/');
        }}
        /> 
    </div>
)


export default connect()(AddExpense);