import React, { useEffect } from 'react';
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
      navigate('/');
    } catch (error) {
      console.error('Signout error:', error.message);
    }
  };

  useEffect(() => {
    const handlePopstate = (e) => {
      e.preventDefault();
      navigate('/');
    };

    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, [navigate]); // Add "navigate" to the dependency array

  return (
    <div className="signout-container">
      <h1>You have successfully logged in to the account</h1>
      <button className="signout-button" onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default Signout;
