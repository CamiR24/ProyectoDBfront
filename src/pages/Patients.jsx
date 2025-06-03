import React from 'react'
import Navbar from '../components/Navigation/Navbar';
import Actual from '../components/Patients/Actual';

import '../styles/Patients.css'

const Patients = () => {
    return (
        <div className="Patients-page">
            <Navbar />
            <div className="second-slide">
                <Actual />
            </div>
        </div>
      );
  
};

export default Patients