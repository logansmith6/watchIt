import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router } from 'react-router-dom' 

import App from './components/App';
import {rootReducer } from './reducers/rootReducer'
import Auth0ProviderWithHistory from "./components/auth/auth0-provider-with-history";
import './index.css';



//will have a redux store

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <Router >
            <Auth0ProviderWithHistory >
                <App />
            </Auth0ProviderWithHistory>
        </Router>
    </Provider>,
    document.getElementById('root')
)

