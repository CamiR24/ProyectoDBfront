import React from 'react'
import Navbar from '../components/Navigation/Navbar';
import CalendarWidget from '../components/Appointments/Calendar';

import '../styles/Appointments.css'

const Appointments = () => {
    return(
        <div className="Appointments-page">
            <Navbar />
            <div className="second-slide">
                <CalendarWidget/>
            </div>
        </div>
    );
  
};

export default Appointments