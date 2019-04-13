import React from 'react';
import ReactDOM from 'react-dom';
// Router
import AppRouter from './routers/AppRouter';
// Styles
import './styles/styles.scss';
import 'normalize.css/normalize.css';


ReactDOM.render(<AppRouter />, document.getElementById('app'));