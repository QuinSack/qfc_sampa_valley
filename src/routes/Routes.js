import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import { AuthContext } from '../contexts/AuthContext'

const AppRoutes = () => {
  const {isAuthenticated} = useContext(AuthContext);
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default AppRoutes