import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = props => {
  const { id, description, amount = 100, createdAt = 500 } = props;
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h1>{description}</h1>
      </Link>
      <h2>Amount: {amount}</h2>
      <h2>Created at: {createdAt}</h2>
    </div>
  );
};

export default ExpenseListItem;
