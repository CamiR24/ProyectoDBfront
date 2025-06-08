import React, { useState } from 'react';
import Navbar from '../components/Navigation/Navbar';
import ResultGrid from '../components/Results/ResultGrid';
import BestPatientGrid from '../components/Results/BestPatientGrid'
import AddResultForm from '../components/Results/AddResultForm';
import '../styles/Results.css'

  const Result = () => {
    const [showForm, setShowForm] = useState(false);
  const [results, setResults] = useState([
    // tu array de pacientes aquí...
  ]);

     const resultsMock = [
          {
            id: 1,
            name: "Camila",
            lastname: "Martínez",
            result: "Infección de vías urinarias",
            resultUpdate: "Excelente",
          },
          {
            id: 2,
            name: "Luis",
            lastname: "Gómez",
            result: "Anemia ferropénica",
            resultUpdate: "Estable",
          },
          {
            id: 3,
            name: "María",
            lastname: "Pérez",
            result: "Anemia ferropénica",
            resultUpdate: "Critico",
          },
          {
            id: 4,
            name: "Carlos",
            lastname: "Ruiz",
            result: "Anemia ferropénica",
            resultUpdate: "Asintomático",
          },
          {
            id: 5,
            name: "Fernanda",
            lastname: "López",
            result: "Anemia ferropénica",
            resultUpdate: "Recuperado",
          },
          {
            id: 6,
            name: "Jorge",
            lastname: "Salazar",
            result: "Anemia ferropénica",
            resultUpdate: "Ingresado",
          }
      ]; 
      const bestPatientMock = [
          {
            id: 1,
            name: "Camila",
            lastname: "Martínez",
            labname: "Micobacterias",
            lastVisit: "2025-01-15",
            resultUpdate: "Excelente"
          },
          {
            id: 2,
            name: "Luis",
            lastname: "Gómez",
            labname: "Inmunopatología",
            lastVisit: "2024-09-03",
            resultUpdate: "Excelente",
          },
          {
            id: 3,
            name: "María",
            lastname: "Pérez",
            labname: "Virología Molecular",
            lastVisit: "2024-02-14",
            resultUpdate: "Excelente",
          },
          {
            id: 4,
            name: "Carlos",
            lastname: "Ruiz",
            labname: "Investigación en Cáncer",
            lastVisit: "2023-11-08",
            resultUpdate: "Excelente",
          },
          {
            id: 5,
            name: "Fernanda",
            lastname: "López",
            labname: "Olab Neurodegenerativas",
            lastVisit: "2023-06-25",
            resultUpdate: "Excelente",
          },
          {
            id: 6,
            name: "Jorge",
            lastname: "Salazar",
            labname: "Laboratorio Médico Polanco",
            lastVisit: "2023-01-12",
            resultUpdate: "Excelente",
          }
      ]; 

      const handleAddPatient = (newPatient) => {
        setResults([...results, { id: results.length + 1, ...newPatient }]);
        setShowForm(false);
      };

    return (
        <div className="Hospitalizations-page">
            <Navbar />
            <div className="second-slide">
               <h1 className="header">Resultados</h1>
               <button className="add-result-button" onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Cancelar' : 'Añadir resultados'}
              </button>
              {showForm && <AddResultForm onSubmit={handleAddPatient} />}
               <ResultGrid patients={resultsMock}/>
               <h1 className="header">Pacinetes en mejor estado</h1>
               <BestPatientGrid patients={bestPatientMock}/>

            </div>
        </div>
    );
};

export default Result