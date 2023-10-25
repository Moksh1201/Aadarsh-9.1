import React from 'react'; // Remove { useEffect }
import { auth } from './utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Signout.css';

function Signout() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log('Logged out');
      // Use replaceState to clear history and navigate to the home page
      window.history.replaceState(null, null, '/');
      navigate('/');
    } catch (error) {
      console.error('Signout error:', error.message);
    }
  };

  return (
    <div className="signout-container">
      <h1>You have successfully logged in</h1>
      <h1>Do you want to Sign Out?</h1>
      <button className="signout-button" onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default Signout;
