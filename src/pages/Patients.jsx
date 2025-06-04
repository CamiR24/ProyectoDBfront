import React from 'react'
import Navbar from '../components/Navigation/Navbar';
import Actual from '../components/Patients/Actual';
import PatientGrid from '../components/Patients/PatientGrid';
import Ancient from '../components/Patients/Ancient';

import '../styles/Patients.css'

const Patients = () => {
    const patientsMock = [
        {
          id: 1,
          name: "Camila",
          lastname: "Martínez",
          birthday: "1995-04-22",
          sex: "Femenino",
          bloodtype: "O+",
          email: "camila.martinez@example.com"
        },
        {
          id: 2,
          name: "Luis",
          lastname: "Gómez",
          birthday: "1988-11-05",
          sex: "Masculino",
          bloodtype: "A-",
          email: "luis.gomez@example.com"
        },
        {
          id: 3,
          name: "María",
          lastname: "Pérez",
          birthday: "2000-06-15",
          sex: "Femenino",
          bloodtype: "B+",
          email: "maria.perez@example.com"
        },
        {
          id: 4,
          name: "Carlos",
          lastname: "Ruiz",
          birthday: "1979-01-30",
          sex: "Masculino",
          bloodtype: "AB+",
          email: "carlos.ruiz@example.com"
        },
        {
          id: 5,
          name: "Fernanda",
          lastname: "López",
          birthday: "1992-09-10",
          sex: "Femenino",
          bloodtype: "O-",
          email: "fernanda.lopez@example.com"
        },
        {
          id: 6,
          name: "Jorge",
          lastname: "Salazar",
          birthday: "1985-03-08",
          sex: "Masculino",
          bloodtype: "A+",
          email: "jorge.salazar@example.com"
        }
    ]; 

    return (
        <div className="Patients-page">
            <Navbar />
            <div className="second-slide">
                <Actual />
                <PatientGrid patients={patientsMock} />
                <Ancient />
                <PatientGrid patients={patientsMock} />
            </div>
        </div>
      );
  
};

export default Patients