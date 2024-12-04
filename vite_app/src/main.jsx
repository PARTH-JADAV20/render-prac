import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import New1 from './New1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <New1 />
  </StrictMode>,
)
