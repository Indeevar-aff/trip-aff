import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Trip from './components/Trip';
import Payment from './components/Payment';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    // Hide scroll on component mount
    document.body.style.overflow = 'hidden';

    return () => {
      // Restore scroll on component unmount
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trip" element={<Trip />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </>
  );
};

export default App;
