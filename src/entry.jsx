import React from 'react'
import ReactDOM from 'react-dom/client'
import './utils/normalize.css'
import './utils/shared.css'
import Components from './components/components.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Components />
  </React.StrictMode>,
)