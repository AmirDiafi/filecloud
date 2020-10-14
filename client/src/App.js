import React from 'react'
import './App.css'
import Routers from './components/Routers'
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routers/>
    </Router>
  )
}
 
export default App;