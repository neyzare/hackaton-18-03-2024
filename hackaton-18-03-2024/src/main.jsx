import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import EnergyInfo from './components/Energy-info.jsx'
import House from './components/House.jsx'
import './index.css'
import Banderoll from './components/Banderoll.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Banderoll />
    <App />
    <EnergyInfo/>
    <House/>
  </React.StrictMode>,
)
