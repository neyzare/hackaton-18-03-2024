import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import EnergyInfo from './components/Energy-info.jsx'
import House from './components/House.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <EnergyInfo/>
    <House/>
  </React.StrictMode>,
)
