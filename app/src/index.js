import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'

import '../assets/favicon.ico'

import { HashRouter as Router, Route } from 'react-router-dom'
import App from './components/app'
import AutoLogout from './components/global/AutoLogout/index'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path='/' component={AutoLogout(App)} />
    </Router>
  </Provider>
  , document.querySelector('#app-container'))
