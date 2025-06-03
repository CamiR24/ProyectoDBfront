import React from "react";

const PatientCard = ({ patient }) => {
    return (
        <div className="patient_card">
            <p className="parragraph">Nombre: {patient.name}</p>
            <p className="parragraph">Apellido: {patient.lastname}</p>
            <p className="parragraph">Fecha de nacimiento: {patient.birthday}</p>
            <p className="parragraph">Sexo: {patient.sex}</p>
            <p className="parragraph">Tipo de sangre: {patient.bloodtype}</p>
            <p className="parragraph">Correo electrónico: {patient.email}</p>
        </div>
    );
}

export default PatientCard