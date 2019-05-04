import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should setup remove expense action object', () => {
    const action = removeExpense({ id:'420' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE', 
        id: '420'
    });
});

test('Should setup edit expense action object', () => {
    const action = editExpense('420', {name: 'Steve'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE', 
        id: '420', 
        updates: {
            name: 'Steve'
        }
    })
});

test('Should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rend', 
        amount: 109500, 
        createdAt: 1000,
        note: 'This was last months rent'
    }

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE', 
        expense: {
            ...expenseData, 
            id: expect.any(String)
        }
    });
});

test('Should setup add expense action object with default values', () => {
    const action = addExpense();
    const defaultProperties = {
        description:"", 
        note:"", 
        amount:0, 
        createdAt:0
    }
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...defaultProperties,
            id: expect.any(String)
        }
    });
});