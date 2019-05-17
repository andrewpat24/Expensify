import React, { Fragment } from "react";
import { connect } from "react-redux";
// Components
import ExpenseListItem from "./ExpenseListItem";
// Helpers
import selectExpenses from "../selectors/expenses";

export const ExpenseList = props => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.length === 0 ? (
      <p>No expenses</p>
    ) : (
      <div>
        {props.expenses.map(expense => {
          return <ExpenseListItem {...expense} key={expense.id} />;
        })}
      </div>
    )}
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
