import React from 'react';
import { connect } from 'react-redux';
// Helpers
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

const ExpenseListFilters = (props) => (
    <div>
        <input 
        type="text" 
        value={props.filters.text} 
        onChange={(e) => {
            props.dispatch(setTextFilter(e.target.value))
            console.log(e.target.value);
        }}/>
        <select 
        value={props.filters.sortBy}
        onChange={(e) => {
            console.log('select changed.', e.target.value);
            e.target.value==="Date" ? props.dispatch(sortByDate()) : props.dispatch(sortByAmount())
        }}>
            <option>Date</option>
            <option>Amount</option>
        </select>
    </div>
)

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters); 