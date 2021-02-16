import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './index.css'

import store from './store'
import GUI from './gui'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GUI />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
