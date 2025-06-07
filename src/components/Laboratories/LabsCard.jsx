import React from "react";

const LabsCard = ({ patient }) => {
    return (
        <div className="lab_card">
            <p className="parragraph">Nombre: {patient.name} {patient.lastname}</p>
            <div className="lab_horizontal_data">
                <p className="parragraph">Laboratorio: {patient.labname}</p>
                <p className="parragraph">Medico: {patient.maindoc}</p>
                <p className="parragraph">Fecha: {patient.lastUpdate}</p>
            </div>
        </div>
    );
}

export default LabsCard