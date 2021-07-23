import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import './index.css';

//will have a redux store


ReactDOM.render(
  
      <App />,
    
    
  
  document.getElementById('root')
);

