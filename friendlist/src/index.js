import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import App from './containers/App';
import reduxThunk from 'redux-thunk';
import * as reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
    </Router>
  </Provider>, document.querySelector('.container'));
