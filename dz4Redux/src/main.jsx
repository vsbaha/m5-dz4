import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { useReducer } from 'react'
import { Provider } from 'react-redux'
import { store } from './store/index.js'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <BrowserRouter>
     <React.StrictMode>
     <App />
     </React.StrictMode>
     </BrowserRouter>
  </Provider>
 
)
