// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './../node_modules/bootstrap/dist/css/bootstrap.css';
import './../node_modules/bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import App from './containers/App';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import store, { history } from './store';
import { withRouter } from 'react-router';

const NonBlockApp = withRouter(App);

ReactDOM.render(
    <Provider store = { store }>
        <ConnectedRouter history = { history }>
            <NonBlockApp />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
