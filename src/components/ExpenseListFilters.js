import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
// Helpers
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends Component {
    state = {
        calendarFocused: null, 
        startDateId: 0, 
        endDateId: 0
    };

    onFocusChange = ( calendarFocused ) => {
        this.setState( () => ({ calendarFocused }) );
    }

    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate)); 
        this.props.dispatch(setEndDate(endDate));
    }

    render () {
        return (
            <div>

                <input 
                type="text" 
                value={this.props.filters.text} 
                onChange={(e) => {
                    this.props.dispatch(setTextFilter(e.target.value))
                    console.log(e.target.value);
                }}/>

                <select 
                value={this.props.filters.sortBy}
                onChange={(e) => {
                    console.log('sortBy changed: ', e.target.value);
                    e.target.value === "date" ? this.props.dispatch( sortByDate() ) : this.props.dispatch(sortByAmount());
                }}>
                    <option>date</option>
                    <option>amount</option>
                </select>

                <DateRangePicker 
                startDateId={'0'}
                endDateId={'0'}
                startDate={this.props.filters.startDate}
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={ () => false }
                showClearDates={true}
                /> 

            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters); 