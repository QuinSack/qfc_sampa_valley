import React, { useContext, useState } from 'react'
import '../styles/header.css'
import { Link } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import { auth } from '../configs/firebase'
import {signOut} from 'firebase/auth'

const Header = () => {

  const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext);

  const handleSignOut = async () => {
    try{
      const logout = await signOut(auth);
      setIsAuthenticated(false);
      console.log(logout);
    }catch(err){
      console.error(err);
    }
  }

   return (
    <div className='headercontainer'>
        <Link to='/'><h4>Home</h4></Link>
        <Link to='/fellowshipdetails'><h4>Fellowship</h4></Link>
        {isAuthenticated ? (
          <>
            <h4 onClick={handleSignOut}>Logout</h4>
          </>
        ): (
          <>
            <Link to='/signup'><h4>Sign Up</h4></Link>
            <Link to='/login'><h4>Sign In</h4></Link>
          </>
        )}
    </div>
  )
}

export default Header