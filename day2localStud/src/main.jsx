import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App'
import Navbar from './components/Navbar'
import ReactFacts from './components/ReactFacts'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <ReactFacts/>
  </React.StrictMode>
)
