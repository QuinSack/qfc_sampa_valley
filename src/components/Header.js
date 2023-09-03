import React from 'react'
import '../styles/header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='headercontainer'>
        <Link to='/signup'><h4>Sign Up</h4></Link>
        <Link to='/login'><h4>Sign In</h4></Link>
    </div>
  )
}

export default Header