import React from 'react'
import '../styles/home.css'

const Home = () => {
  return (
    <div className='homecontainer'>
      <h4>Please fill in your details to continue</h4>
      <form className='memberform'>
        <input type='text' placeholder='Full Name' />
        <input type='date' placeholder='Date of birth' />
        <input
          type='text'
          placeholder='Employment Status'
          list='employmentStatusOptions'
        />
        <datalist id='employmentStatusOptions'>
          <option value='Employed' />
          <option value='Unemployed' />
          <option value='Student' />
          <option value='Retired' />
        </datalist>
        <input
          type='text'
          placeholder='Marital Status'
          list='maritalStatusOptions'
        />
        <datalist id='maritalStatusOptions'>
          <option value='Single' />
          <option value='Married' />
        </datalist>
        <input type='text' placeholder='Location' />
        <input type='text' placeholder='Telephone/Mobile Number' />
        <input type='email' placeholder='Email Address' />
        <button type='submit'><strong>Submit Details</strong></button>
      </form>
    </div>
  )
}

export default Home