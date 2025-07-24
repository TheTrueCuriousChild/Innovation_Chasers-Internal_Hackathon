import React, { useState } from 'react';
import Navbar from './navBar';
import Middle from './components/middle/images';
import Footer from './components/Footer';
import './App.css';
import SignUp from './components/SignUp';
import DateSelector from './components/slot/DateSelector';

function App() {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div style={{ backgroundColor: '#fffaf0', minHeight: '100vh' }}>
      <Navbar onSignUp={() => setShowSignUp(true)} />
      <div className="main-content">
        <h1>Welcome to Hari_Ram Turf Booking</h1>
        <p>Select your turf and start playing!</p>
        <Middle />
        <DateSelector />
       </div>
      {showSignUp && <SignUp onClose={() => setShowSignUp(false)} />}
    </div>
  );
}

export default App;
