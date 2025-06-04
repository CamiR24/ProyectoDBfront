import React from 'react'
import Navbar from '../components/Navigation/Navbar';
import Button from '../components/Especializations/Button';
import EspecializationGrid from '../components/Especializations/EspecializationGrid';

import '../styles/Especializations.css'

const Especializations = () => {
    const especializationsMock = [
        {
          id: 1,
          name: "Cardiología",
          description: "Descripción de la especialidad obtenida de la base de datos",
        },
        {
          id: 2,
          name: "Neurología",
          description: "Descripción de la especialidad obtenida de la base de datos",
        },
        {
          id: 3,
          name: "Cirujía",
          description: "Descripción de la especialidad obtenida de la base de datos",
        },
        {
          id: 4,
          name: "Oncología",
          description: "Descripción de la especialidad obtenida de la base de datos",
        },
        {
          id: 5,
          name: "Pediatría",
          description: "Descripción de la especialidad obtenida de la base de datos",
        },
        {
          id: 6,
          name: "Psiquiatría",
          description: "Descripción de la especialidad obtenida de la base de datos",
        },
        {
          id: 7,
          name: "Dermatología",
          description: "Descripción de la especialidad obtenida de la base de datos",
        },
        {
          id: 8,
          name: "Geriatría",
          description: "Descripción de la especialidad obtenida de la base de datos",
        }

    ];

    return(
        <div className="Especializations-page">
            <Navbar />
            <div className="second-slide">
                <Button text={'Agregar especialidad'}/>
                <EspecializationGrid especializations={especializationsMock} />
            </div>
        </div>
    );
  
};

export default Especializations