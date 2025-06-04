import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navigation/Navbar';
import Button from '../components/Especializations/Button';

import '../styles/Doctors.css'

const doctorsMock = {
    Cardiología: ['Dr. Juan Pérez', 'Dra. Ana López'],
    Neurología: ['Dr. Miguel Ríos', 'Dra. Claudia Ruiz'],
    Cirujía: ['Dr. Ernesto Morales'],
    // etc...
  };

const Doctors = () => {
    const { name } = useParams();
    const doctors = doctorsMock[name] || [];

    return(
        <div className="Doctors-page">
            <Navbar />
            <div className="second-slide">
                <h1 className='header'>{name}</h1>

                {doctors.length === 0 ? (
                    <p className='no-doctors'>No hay doctores registrados para esta especialidad.</p>
                ) : (
                    <ul>
                    {doctors.map((doctor, index) => (
                        <li className='list' key={index}>{doctor}</li>
                    ))}
                    </ul>
                )}
                <Button text={'Agregar médico'}/>
            </div>
        </div>
    );
};

export default Doctors