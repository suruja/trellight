import 'bulma/css/bulma.css'

import * as React from 'react';
import * as ReactDOM from 'react-dom'

import Dashboard from '../components/Dashboard'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Dashboard />,
    document.body.appendChild(document.createElement('div')) as HTMLElement,
  )
})
