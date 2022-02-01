import React from 'react';
import ReactDOM from 'react-dom';
//import './styles.scss'
//Import router , the router component allowing routing in our compenent, responsible for routing in our app
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
