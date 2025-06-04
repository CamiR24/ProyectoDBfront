import React from 'react'
import Navbar from '../components/Navigation/Navbar';
import RoomGrid from '../components/Hospitalizations/RoomGrid';

import '../styles/Hospitalizations.css'

const rooms = [
    { id: 101, patientname: "Juan Pérez", diagnosis: "Hipertensión", treatment: "Medicamentos diarios" },
    { id: 102, patientname: "María López", diagnosis: "Diabetes tipo 2", treatment: "Insulina" },
    { id: 103, patientname: "Carlos Ruiz", diagnosis: "Asma", treatment: "Inhalador" },
    { id: 201, patientname: "Laura García", diagnosis: "Fractura de pierna", treatment: "Rehabilitación" },
    { id: 202, patientname: "Pedro Martínez", diagnosis: "COVID-19", treatment: "Oxígeno y antivirales" },
    { id: 203, patientname: "Ana Torres", diagnosis: "Gripe común", treatment: "Reposo e hidratación" },
    { id: 301, patientname: "Javier Díaz", diagnosis: "Insomnio", treatment: "Melatonina y terapia" },
    { id: 302, patientname: "Sofía Ramírez", diagnosis: "Migraña", treatment: "Analgésicos" },
    { id: 303, patientname: "Ricardo Gómez", diagnosis: "Alergia alimentaria", treatment: "Epinefrina" }
  ];

  const Hospitalizations = () => {
    const level1Rooms = rooms.filter(room => String(room.id).startsWith('1'));
    const level2Rooms = rooms.filter(room => String(room.id).startsWith('2'));
    const level3Rooms = rooms.filter(room => String(room.id).startsWith('3'));

    return (
        <div className="Hospitalizations-page">
            <Navbar />
            <div className="second-slide">
                <h1 className="header">Nivel 1</h1>
                <div className='impar'>
                    <RoomGrid rooms={level1Rooms} />
                </div>

                <h1 className="header">Nivel 2</h1>
                <div className='par'>
                    <RoomGrid rooms={level2Rooms} />
                </div>
                
                <h1 className="header">Nivel 3</h1>
                <div className='impar'>
                    <RoomGrid rooms={level3Rooms} />
                </div>
            </div>
        </div>
    );
};

export default Hospitalizations