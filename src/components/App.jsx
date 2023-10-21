import React from 'react';
import Header from './Header';
import { Routes, Route } from 'react-router-dom'; // Import Routes
import FirstImg from './FirstImg';
import CardList from './CardList';
import CardList1 from './CardList1';
import Sign from './Sign.jsx';
import End from './End';
import Login from './Login';
import Signup from './Signup';
import Signout from './Signout';

function App() {
  return ( 
    <div>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/Signout" element={<Signout />} />        
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      <FirstImg />
      <CardList />
      <CardList1 />
      <Sign />
      <End />
    </div>
  );
}

export { App, Home };
export default App;
