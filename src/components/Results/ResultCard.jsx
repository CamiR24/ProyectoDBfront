import React from "react";

const ResultCard = ({ patient }) => {
    return (
        <div className="result_card">
            <p className="parragraph">Lab: {patient.result}</p>
            <div className="result_horizontal_data">
               <p className="parragraph">Nombre: {patient.name} {patient.lastname}</p>
               <p className="parragraph">Estado: {patient.resultUpdate}</p>
            </div>
        </div>
    );
}

export default ResultCard