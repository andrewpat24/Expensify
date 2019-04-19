import { createStore, combineReducers } from 'redux';

const expensesReducerDefaultState = []; 

const expensesReducer = (state=[], action) => {
    switch(action.type) {
        default: 
            return state;
    }
}

const store = createStore(combineReducers({
        expenses: expensesReducer
    })
);
console.log(store.getState());

const demoState = { 
    expenses: [{
        id: 'oiajerfdfdijgbk', 
        description: 'rent', 
        note: 'final payment',
        amount: 54500, 
        createdAt: '0'
    }], 
    filters: {
        text: 'rent', 
        sortBy: 'amount', 
        startDate: undefined, 
        endDate: undefined
    }
};