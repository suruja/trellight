import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import ActionCable from 'actioncable'

import reducer from '../reducers/index'
import { StoreState } from '../types/index'
import { Action } from '../actions/index'
import { SERVER_ACTION } from '../constants/index'

import Dashboard from '../containers/Dashboard'

import 'bulma/css/bulma.css'

const middlewares = [
  thunk,
  (process.env.NODE_ENV !== 'production') && logger,
].filter(Boolean);

const store = createStore<StoreState, Action, any, any>(reducer, {
  cards: {},
  columns: {},
}, applyMiddleware(...middlewares))

const consumer = ActionCable.createConsumer()
consumer.subscriptions.create({ channel: "DashboardChannel" }, {
  received(data) {
    store.dispatch(data)
  }
})

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Dashboard />
    </Provider>,
    document.body.appendChild(document.createElement('div')) as HTMLElement,
  )
})
