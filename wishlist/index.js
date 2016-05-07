import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import wishApp from './reducers'
import App from './components/App'
import products from './products.json'

let store = createStore(wishApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
