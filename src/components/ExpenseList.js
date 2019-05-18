import React from "react";
import { connect } from "react-redux";
// Components
import ExpenseListItem from "./ExpenseListItem";
// Helpers
import selectExpenses from "../selectors/expenses";

export const ExpenseList = props => {
  console.log(props);
  let expensesProp;
  if (typeof props.expenses !== "undefined") {
    expensesProp = props.expenses;
  } else {
    // console.log(props);
    expensesProp = [];
  }

  return (
    <div>
      <h1>Expense List</h1>
      {expensesProp.length === 0 ? (
        <p>No expenses</p>
      ) : (
        <div>
          {expensesProp.map(expense => {
            return <ExpenseListItem {...expense} key={expense.id} />;
          })}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  console.log("state:", selectExpenses(state.expenses, state.filters));
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
