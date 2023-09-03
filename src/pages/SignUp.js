import React from 'react'
import '../styles/signup.css'

const SignUp = () => {
  return (
    <div className="signup-container">
        <h2>Sign Up</h2>
        <form className="signup-form">
            <div className="input-group">
                <label for="email">Email:</label>
                <input type="text" id="email" name="email" placeholder="Enter your email" required />
            </div>
            <div className="input-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required />
            </div>
            <button type="submit" className="signup-button">Sign Up</button>
        </form>
    </div>
  )
}

export default SignUp