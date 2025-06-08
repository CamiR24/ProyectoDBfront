import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navigation/Navbar';
import Actual from '../components/Patients/Actual';
import PatientGrid from '../components/Patients/PatientGrid';
import Ancient from '../components/Patients/Ancient';

import '../styles/Patients.css'

const Patients = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/pacientes/")
            .then(res => res.json())
            .then(data => setPatients(data));
    }, []);

    return (
        <div className="Patients-page">
            <Navbar />
            <div className="second-slide">
                <Actual />
                <PatientGrid patients={patients} />
                <Ancient />
            </div>
        </div>
    );
};

export default Patients