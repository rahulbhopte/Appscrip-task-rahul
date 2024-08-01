import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider }from 'react-redux'
import store from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  //we created redux provider which is pass data from redux store to child components.
  <Provider store={store}>
    <App />
  </Provider>
  
)
