import React, { useState, useEffect, useContext } from 'react';
import { auth, db } from '../configs/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { collection, addDoc } from 'firebase/firestore';
import '../styles/fellowship.css'

const ServiceForms = () => {
  const [attendance, setAttendance] = useState('');
  const [serviceDate, setServiceDate] = useState('');
  const [income, setIncome] = useState('');
  const [tithers, setTithers] = useState('');
  const [treasurers, setTreasurers] = useState('');
  const navigate = useNavigate();

  const { isAuthenticated } = useContext(AuthContext);
        
  const submitServiceForm = async (e) => {
    e.preventDefault();
    const serviceFormRef = collection(db, "servicedetails");
    try{
      const postServiceForm = await addDoc(serviceFormRef, {attendance: attendance, date_of_service: serviceDate, income: income, number_of_tithers: tithers, treasurers: treasurers});
      setAttendance("");
      setServiceDate("");
      setIncome("");
      setTithers("");
      setTreasurers("");
      console.log(postServiceForm);
    }catch(err){
      console.error(err);
    }
  }

  return (
    <div className='fellowshipcontainer'>
      <h2>Service Form</h2>
      {isAuthenticated ? (
        <form className='fellowshipform'>
          <div>
            <label>Attendance: </label>
            <input type="number" value={attendance} onChange={(e) => setAttendance(e.target.value)} />
          </div>
          <div>
            <label>Date of Service: </label>
            <input type='date' value={serviceDate} onChange={(e) => setServiceDate(e.target.value)} />
          </div>
          <div>
            <label>Income: </label>
            <input placeholder='Indicate currency' value={income} onChange={(e) => setIncome(e.target.value)} />
          </div>
          <div>
            <label>Number of Tithers: </label>
            <input type='number' value={tithers} onChange={(e) => setTithers(e.target.value)} />
          </div>
          <div>
            <label>Treasurers: </label>
            <input placeholder='eg. Atsu' value={treasurers} onChange={(e) => setTreasurers(e.target.value)} />
          </div>
          <button type="button" onClick={(e) => submitServiceForm(e)}>
            <b>Submit Service Form</b>
          </button>
        </form>
      ) : (
        <p>Please log in to view and submit the service details</p>
      )}
    </div>
  );
};

export default ServiceForms;
