import React, { useEffect } from 'react';
import { auth } from './utils/firebase'; // Import the Firebase auth instance
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Signout.css';

function Signout() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log('Logged out');
      navigate('/');
    } catch (error) {
      console.error('Signout error:', error.message);
    }
  };

  useEffect(() => { // Fixed the syntax error, use () instead of {}
    window.history.replaceState(null, document.title, '/'); // Changed 'navigate' to 'history'
  }, []);

  return (
    <div className="signout-container">
      <h1>You have successfully logged out of the account</h1> {/* Corrected the message */}
      <button className="signout-button" onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default Signout;
