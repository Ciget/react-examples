import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { App } from './containers/App';
import reduxThunk from 'redux-thunk';
import friendReducer from './reducers';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  friend: friendReducer,
});
const store = createStore(rootReducer, applyMiddleware(reduxThunk));
render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} >

      </Route>
    </Router>
  </Provider>, document.getElementById('root'));
