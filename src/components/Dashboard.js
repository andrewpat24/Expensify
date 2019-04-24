import React from 'react';
// Components 
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const Dashboard = () => (
    <section component="Dashboard">
        <h1>Dashboard</h1>
        <ExpenseListFilters /> 
        <ExpenseList />
    </section>
)

export default Dashboard; 