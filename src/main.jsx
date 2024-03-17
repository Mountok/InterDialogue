import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import "./18n.js"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Suspense fallback={<div>loading...</div>}>
      <App/>
    </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
)