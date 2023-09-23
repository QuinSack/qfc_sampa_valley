import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import { AuthContext } from '../contexts/AuthContext'
import UserProfile from '../components/UserProfile'

const AppRoutes = () => {
  const {isAuthenticated} = useContext(AuthContext);
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={isAuthenticated ? <UserProfile /> : <Navigate to="/login" />} />
    </Routes>
  )
}

export default AppRoutes