import React, { useState, useEffect, useContext } from 'react';
import { auth, db } from '../configs/firebase';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const UserProfile = () => {
  const [leaderName, setLeaderName] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  //const isAuthenticated = !!auth.currentUser;
  const {isAuthenticated} = useContext(AuthContext);

  //const uid = auth.currentUser.uid; // Get the currently logged-in user's UID

  // Fetch and display the user's current profile information
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        //const userDoc = await firestore.collection('users').doc(uid).get();
        if(isAuthenticated){
            const uid = auth.currentUser.uid;
            const userDoc = await db.collection('fellowshipdetails').doc(uid).get();
            if (userDoc.exists) {
            const userData = userDoc.data();
            setLeaderName(userData.leaderName);
            setStatus(userData.status);
            }
        } else{
            console.log("User is not authenticated");
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  const handleProfileUpdate = async () => {
    try {
      // Update the user's profile in the database
      //await firestore.collection('users').doc(uid).update({
        if(isAuthenticated){
            const uid = auth.currentUser.uid;
            await db.collection('fellowshipdetails').doc(uid).update({
            leader_name: leaderName,
            status,
            // Add other profile fields as needed
        });
        console.log('Profile updated successfully');
        } else{
            console.log("User is not authenticated");
        }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div>
      <h2>Profile</h2>
      {isAuthenticated ? (
        <form>
        <div>
          <label>Name:</label>
          <input type="text" value={leaderName} onChange={(e) => setLeaderName(e.target.value)} />
        </div>
        <div>
          <label>Status:</label>
          <textarea value={status} onChange={(e) => setStatus(e.target.value)} />
        </div>
        <button type="button" onClick={handleProfileUpdate}>Update Profile</button>
        </form>
      ) : (
        <p>Please log in to view and update your profile</p>
      )}
    </div>
  );
};

export default UserProfile;
