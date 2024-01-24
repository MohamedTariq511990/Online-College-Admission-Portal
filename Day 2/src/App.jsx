import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import LoginPage from './LoginPage'
import RegisterPage from './Register'
import Navbar from './Navbar'
import Home from './HomePage'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/navbar" element={<Navbar/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </Router>
    
  )
}

export default App
