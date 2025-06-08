import React from "react";

const PatientCard = ({ patient }) => {
    return (
        <div className="patient_card">
            <p className="parragraph">Nombre: {patient.nombre}</p>
            <p className="parragraph">Apellido: {patient.apellido}</p>
            <p className="parragraph">Fecha de nacimiento: {patient.fecha_nacimiento}</p>
            <p className="parragraph">Sexo: {patient.sexo}</p>
            <p className="parragraph">Tipo de sangre: {patient.tipo_sangre}</p>
            <p className="parragraph">Correo electrónico: {patient.correo}</p>
        </div>
    );
}

export default PatientCard