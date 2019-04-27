import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// Helpers
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = (props) => {
    const { dispatch, id, description, amount=100, createdAt=500 } = props;  
    return (
            <div>
                <Link to={`/edit/${id}`}>
                    <h1>{description}</h1>
                </Link>
                <h2>Amount: {amount}</h2>
                <h2>Created at: {createdAt}</h2>
                
                <button onClick={ () => { dispatch( 
                    removeExpense({
                        id
                    }) 
                ) } }>Remove</button>
            </div>
    )
}

export default connect()(ExpenseListItem); 