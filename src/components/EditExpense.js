import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
// Helpers
import {
  editExpense,
  removeExpense,
  startRemoveExpense
} from "../actions/expenses";

export class EditExpense extends React.Component {
  onSubmit = expense => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push("/");
  };

  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h1>Editing doc id: {this.props.expense.id}</h1>
        <h2>{this.props.expense.description}</h2>
        <ExpenseForm
          expense={this.props.expense}
          expenseIsNew={false}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => {
      return expense.id === props.match.params.id;
    })
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editExpense: expense => dispatch(editExpense(expense.id, expense)),
    startRemoveExpense: expense => dispatch(startRemoveExpense(expense))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpense);

// const EditExpense = props => {
//   if (typeof props.expense === "undefined") {
//     return props.history.push("/");
//   }

//   return (
//     <div>
//       <h1>Editing doc id: {props.match.params.id}</h1>
//       <h2>{props.expense.description}</h2>
//       <ExpenseForm
//         expense={props.expense}
//         expenseIsNew={false}
//         onSubmit={expense => {
//           props.dispatch(editExpense(props.expense.id, expense));
//           props.history.push("/");
//         }}
//       />
//       <button
//         onClick={() => {
//           props.dispatch(removeExpense({ id: props.expense.id }));
//           props.history.push("/");
//         }}
//       >
//         Remove
//       </button>
//     </div>
//   );
// };
