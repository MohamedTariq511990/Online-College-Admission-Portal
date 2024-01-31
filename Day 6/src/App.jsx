import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import LoginPage from './LoginPage'
import RegisterPage from './Register'
import Navbar from './Navbar'
import Home from './HomePage'
import Admission from './Admisssion'
import ContactPage from './ContactPage.'
import AdminLogin from './AdminLogin'
import AdminHome from './AdminHome'
import InformationTechnology from './InformationTechnology'
import AboutUs from './Aboutus'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/navbar" element={<Navbar/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/admission" element={<Admission/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/InformationTechnology" element={<InformationTechnology/>}/>
        
        <Route path="/LoginPage" element={<LoginPage/>}/>
        <Route path="/AdminLogin" element={<AdminLogin/>}/>
        <Route path="/adminhome" element={<AdminHome/>}/>
        <Route path="/about" element={<AboutUs/>}/>

       
      </Routes>
    </Router>
    
  )
}

export default App
