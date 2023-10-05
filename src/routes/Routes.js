import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import { AuthContext } from '../contexts/AuthContext'
import FellowshipDetails from '../components/FellowshipDetails'
import ServiceForms from '../pages/ServiceForms'

const AppRoutes = () => {
  const {isAuthenticated} = useContext(AuthContext);
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/fellowshipdetails' element={isAuthenticated ? <FellowshipDetails /> : <Navigate to="/login" />} />
        <Route path='/serviceform' element={<ServiceForms />} />
    </Routes>
  )
}

export default AppRoutes