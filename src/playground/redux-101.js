import { createStore } from 'redux';

const store = createStore ((state={ count: 0}, action) => {
    const amount = action.amount ? action.amount : 1; 
    switch (action.type) {
        case 'INCREMENT': 
            return {
                count: state.count + amount
            };
        case 'DECREMENT': 
            return {
                count: state.count - amount
            };
        case 'RESET': 
            return {
                count: 0
            };
        case 'SET': 
            return {
                count: action.value
            }
        default: 
            return state; 
    }
})

store.subscribe( () => {
    console.log(store.getState());
});

store.dispatch({
    type: 'INCREMENT',
    amount: 5
});


store.dispatch({
    type: 'DECREMENT',
    amount: 69
});


store.dispatch({
    type: 'DECREMENT'
});


store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'SET',
    value: 420
});
