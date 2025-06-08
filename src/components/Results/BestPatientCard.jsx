import React from "react";

const PatientCard = ({ patient }) => {
    return (
        <div className="patient_card">
            <p className="parragraph">{patient.name} {patient.lastname}</p>
            <p className="parragraph">Ultima visita: {patient.lastVisit}</p>
            <p className="parragraph">Estado: {patient.resultUpdate}</p>
        </div>
    );
}

export default PatientCard