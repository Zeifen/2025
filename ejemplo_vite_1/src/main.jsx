import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App_condition from './App_condition.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App_condition />
  </StrictMode>,
)
