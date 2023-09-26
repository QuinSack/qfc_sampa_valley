import React, { useState, useEffect, useContext } from 'react';
import { auth, db } from '../configs/firebase';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { collection, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import '../styles/fellowship.css'

const FellowshipDetails = () => {
  const [leaderName, setLeaderName] = useState('');
  const [members, setMembers] = useState('');
  const [meetingDay, setMeetingDay] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (isAuthenticated) {
          const uid = auth.currentUser.uid;
          const userDocRef = doc(db, 'fellowshipdetails', uid);
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            setLeaderName(userData.leader_name);
            setMembers(userData.members);
            setMeetingDay(userData.meeting_day);
            setStatus(userData.status);
          } else {
            // Document doesn't exist for a new user, initialize with default values
            setLeaderName('');
            setStatus('');
          }
        } else {
          console.log('User is not authenticated');
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, [isAuthenticated]);

  const handleProfileUpdate = async () => {
    try {
      if (isAuthenticated) {
        const uid = auth.currentUser.uid;
        const userDocRef = doc(db, 'fellowshipdetails', uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          // Update the existing document
          await updateDoc(userDocRef, {
            leader_name: leaderName,
            members: members,
            meeting_day: meetingDay,
            status: status,
            // Add other profile fields as needed
          });

          alert("Details updated successfully");

          console.log('Profile updated successfully');
        } else {
          // Create a new document for the user
          await setDoc(userDocRef, {
            leader_name: leaderName,
            members: members,
            meeting_day: meetingDay,
            status: status,
            // Add other profile fields as needed
          });

          alert("Details submitted successfully");

          console.log('Profile created successfully');
        }
      } else {
        console.log('User is not authenticated');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className='fellowshipcontainer'>
      <h2>Fellowship Details</h2>
      {isAuthenticated ? (
        <form className='fellowshipform'>
          <div>
            <label>Fellowship Leader: </label>
            <input type="text" value={leaderName} onChange={(e) => setLeaderName(e.target.value)} />
          </div>
          <div>
            <label>Number of Members: </label>
            <input value={members} onChange={(e) => setMembers(e.target.value)} />
          </div>
          <div>
            <label>Meeting Day: </label>
            <input value={meetingDay} onChange={(e) => setMeetingDay(e.target.value)} />
          </div>
          <div>
            <label>Status: </label>
            <input value={status} onChange={(e) => setStatus(e.target.value)} />
          </div>
          <button type="button" onClick={handleProfileUpdate}>
            <b>Update Details</b>
          </button>
          <button><b>Service Forms</b></button>
        </form>
      ) : (
        <p>Please log in to view and update your profile</p>
      )}
    </div>
  );
};

export default FellowshipDetails;
