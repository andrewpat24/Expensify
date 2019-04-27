import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';


const EditExpense = (props) => (
    <div>
        <h1>Editing doc id: {props.match.params.id}</h1>
        <h2>{props.expense.description}</h2>
        <ExpenseForm 
            expense={props.expense}
            expenseIsNew={false}
            onSubmit={(expense) => {
                console.log(expense);
            }}
        />
    </div>
)


const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find( (expense) => {
            return expense.id === props.match.params.id; 
        })
    }
}

export default connect(mapStateToProps)(EditExpense); 