import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import cablecar from 'redux-cablecar'

import reducer from '../reducers/index'
import { StoreState } from '../types/index'
import { Action } from '../actions/index'
import { SERVER_ACTION } from '../constants/index'

import Dashboard from '../containers/Dashboard'

import 'bulma/css/bulma.css'

const store = createStore<StoreState, Action, any, any>(reducer, {
  cards: {},
  columns: {},
}, applyMiddleware(
  thunk,
  cablecar,
  logger,
))

cablecar.connect(store, 'DashboardChannel', {
  params: { },
  prefix: SERVER_ACTION,
})

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Dashboard />
    </Provider>,
    document.body.appendChild(document.createElement('div')) as HTMLElement,
  )
})
