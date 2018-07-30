import React from 'react'
import {render} from 'react-dom'

import App from './components/App'

import store from './store' //redux
import {Provider} from 'react-redux' //redux

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
})