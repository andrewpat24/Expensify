import React from "react";
import { connect } from "react-redux";
// Components
import ExpenseForm from "./ExpenseForm";
// Helpers
import { startAddExpense } from "../actions/expenses";

export class AddExpense extends React.Component {
  onSubmit = expense => {
    this.props.startAddExpense(expense);
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={this.onSubmit} expenseIsNew={true} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startAddExpense: expense => dispatch(startAddExpense(expense))
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(AddExpense);
