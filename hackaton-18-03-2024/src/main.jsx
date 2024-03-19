import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './index.css'
import Banderoll from './components/Banderoll.jsx'
import Dpe from './components/Dpe.jsx'
import Card from '../src/components/Card.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Banderoll />
    <App />
    <Dpe/>
    <Card />
  </React.StrictMode>,
)
