import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
// Helpers
import { editExpense, removeExpense } from "../actions/expenses";

const EditExpense = props => {
  if (typeof props.expense === "undefined") {
    return props.history.push("/");
  }

  return (
    <div>
      <h1>Editing doc id: {props.match.params.id}</h1>
      <h2>{props.expense.description}</h2>
      <ExpenseForm
        expense={props.expense}
        expenseIsNew={false}
        onSubmit={expense => {
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push("/");
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeExpense({ id: props.expense.id }));
          props.history.push("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => {
      return expense.id === props.match.params.id;
    })
  };
};

export default connect(mapStateToProps)(EditExpense);
