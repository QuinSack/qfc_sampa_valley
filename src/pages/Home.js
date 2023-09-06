import React, { useState } from 'react'
import '../styles/home.css'
import {collection, addDoc} from 'firebase/firestore'
import { db } from '../configs/firebase'

const Home = () => {
  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [employmentStatus, setEmploymentStatus] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [location, setLocation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleFormSubmit =async (e) => {
    e.preventDefault();
    try{
      const membersRef = collection(db, "members");
      const formData = {
        fullname: fullName,
        date_of_birth: dateOfBirth,
        employment_status: employmentStatus,
        marital_status: maritalStatus,
        location: location,
        telephone: phoneNumber,
        email_address: email,
      };
      const submitForm = await addDoc(membersRef, formData)
      console.log(submitForm);

      setFullName('');
      setDateOfBirth('');
      setEmploymentStatus('');
      setMaritalStatus('');
      setLocation('');
      setPhoneNumber('');
      setEmail('');
    }catch(err){
      console.error(err);
    }
  }
  return (
    <div className='homecontainer'>
      <h4>Please fill in your details to continue</h4>
      <form className='memberform' onSubmit={handleFormSubmit}>
        <input type='text' placeholder='Full Name' value={fullName} onChange={(e)=>setFullName(e.target.value)} />
        <input type='date' placeholder='Date of birth' value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
        <input
          type='text'
          placeholder='Employment Status'
          list='employmentStatusOptions'
          value={employmentStatus}
          onChange={(e)=>setEmploymentStatus(e.target.value)}
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
          value={maritalStatus}
          onChange={(e)=>setMaritalStatus(e.target.value)}
        />
        <datalist id='maritalStatusOptions'>
          <option value='Single' />
          <option value='Married' />
        </datalist>
        <input type='text' placeholder='Location' value={location} onChange={(e)=>setLocation(e.target.value)} />
        <input type='text' placeholder='Telephone/Mobile Number' value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} />
        <input type='email' placeholder='Email Address' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <button type='submit'><strong>Submit Details</strong></button>
      </form>
    </div>
  )
}

export default Home