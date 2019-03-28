import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { Provider } from 'react-redux'

import reducer from '../reducers/index'
import { StoreState } from '../types/index'
import { Action } from '../actions/index'

import Dashboard from '../containers/Dashboard'

import 'bulma/css/bulma.css'

const store = createStore<StoreState, Action, any, any>(reducer, {
  cards: {
    1: {
      id: 1,
      title: "Alpha",
      index: 0,
      columnId: 1,
    },
    2: {
      id: 2,
      title: "Tango",
      index: 1,
      columnId: 1,
    },
    3: {
      id: 3,
      title: "Charlie",
      index: 0,
      columnId: 2,
    },
    4: {
      id: 4,
      title: "Bravo",
      index: 1,
      columnId: 2,
    },
    5: {
      id: 5,
      title: "Marshal",
      index: 2,
      columnId: 1,
    },
  },
  columns: {
    1: {
      id: 1,
      title: "À rencontrer",
      index: 0,
    },
    2: {
      id: 2,
      title: "Entretien",
      index: 1,
    },
  },
}, applyMiddleware(logger))

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Dashboard />
    </Provider>,
    document.body.appendChild(document.createElement('div')) as HTMLElement,
  )
})
