import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { BrowserRouter } from 'react-router-dom'
import configureStore from './store/configureStore';
import WebFont from 'webfontloader';
WebFont.load({ google: { families: ['Material Icons'] } });
let createBrowserHistory = require("history").createBrowserHistory;

const history = createBrowserHistory();
const store = configureStore(history);

function render(Component) {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root') || React.createElement('div')
  );
}

render(App);