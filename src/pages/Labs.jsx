import React, { useState } from 'react';
import Navbar from '../components/Navigation/Navbar';
import PatientGrid from '../components/Laboratories/PatientGrid';
import LabsGrid from '../components/Laboratories/LabsGrid'
import AddLabsForm from '../components/Laboratories/AddLabsForm.jsx';
import '../styles/Labs.css'

  const Labs = () => {
    const [showForm, setShowForm] = useState(false);
    const [labs, setLabs] = useState([
  // Laboratorios
    ]);
     const patientsMock = [
          {
            id: 1,
            name: "Camila",
            lastname: "Martínez",
            birthday: "1995-04-22",
            sex: "Femenino",
            lastUpdate: "2025-02-09",
          },
          {
            id: 2,
            name: "Luis",
            lastname: "Gómez",
            birthday: "1988-11-05",
            sex: "Masculino",
            lastUpdate: "2025-05-11",
          },
          {
            id: 3,
            name: "María",
            lastname: "Pérez",
            birthday: "2000-06-15",
            sex: "Femenino",
            lastUpdate: "2025-11-12",
          },
          {
            id: 4,
            name: "Carlos",
            lastname: "Ruiz",
            birthday: "1979-01-30",
            sex: "Masculino",
            lastUpdate: "2025-01-21",
          },
          {
            id: 5,
            name: "Fernanda",
            lastname: "López",
            birthday: "1992-09-10",
            sex: "Femenino",
            lastUpdate: "2025-07-22",
          },
          {
            id: 6,
            name: "Jorge",
            lastname: "Salazar",
            birthday: "1985-03-08",
            sex: "Masculino",
            lastUpdate: "2025-03-08",
          
          }
      ]; 
      const LabsMock = [
          {
            id: 1,
            name: "Camila",
            lastname: "Martínez",
            labname: "Micobacterias",
            maindoc: "Mariana Torres",
            lastUpdate: "2025-06-04",
          },
          {
            id: 2,
            name: "Luis",
            lastname: "Gómez",
            labname: "Inmunopatología",
            maindoc: "Manuel Castro",
            lastUpdate: "2025-06-5",
          },
          {
            id: 3,
            name: "María",
            lastname: "Pérez",
            labname: "Virología Molecular",
            maindoc: "Esteban Cabrera",
            lastUpdate: "2025-06-6",
          },
          {
            id: 4,
            name: "Carlos",
            lastname: "Ruiz",
            labname: "Investigación en Cáncer",
            maindoc: "Hugo Martínez",
            lastUpdate: "2025-06-7",
          },
          {
            id: 5,
            name: "Fernanda",
            lastname: "López",
            labname: "Olab Neurodegenerativas",
            maindoc: "Óscar Medina",
            lastUpdate: "2025-06-7",
          },
          {
            id: 6,
            name: "Jorge",
            lastname: "Salazar",
            labname: "Laboratorio Médico Polanco",
            maindoc: "Claudia Espinoza",
            lastUpdate: "2025-06-08",
          }
      ]; 

      const handleAddLab = (newLab) => {
        setLabs([...labs, { id: labs.length + 1, ...newLab }]);
        setShowForm(false);
      };

    return (
        <div className="Hospitalizations-page">
            <Navbar />
            <div className="second-slide">
               <h1 className="header">Laboratorios recientes</h1>
                <button className="add-labs-button" onClick={() => setShowForm(!showForm)}>
                  {showForm ? 'Cancelar' : 'Añadir laboratorios'}
                </button>
                {showForm && <AddLabsForm onSubmit={handleAddLab} />}
               <LabsGrid patients={LabsMock}/>
               <h1 className="header">Pacientes recientes</h1>
               <PatientGrid patients={patientsMock}/>

            </div>
        </div>
    );
};

export default Labs