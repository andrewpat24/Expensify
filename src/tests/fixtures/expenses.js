import moment from 'moment';

const expenses = [
    {
        id: '1',
        description: 'Gum',
        note: 'Test note',
        amount: 50, 
        createdAt: moment(0).add(0, 'days').valueOf()
    }, 
    {
        id: '2',
        description: 'Rent',
        note: 'Test note',
        amount: 25000, 
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
        id: '3',
        description: 'Credit',
        note: 'Test note',
        amount: 50000, 
        createdAt: moment(0).add(4, 'days').valueOf()
    }
]

export default expenses; 