import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './components/global/Header.jsx'
import Footer from './components/global/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />    
    <App />
    <Footer />
  </React.StrictMode>,
)
