import React from "react";

const RoomCard = ({ room }) => {
    return (
        <div className="patient_card">
            <p className="parragraph">{room.id}</p>
            <p className="parragraph">Nombre: {room.patientname}</p>
            <p className="parragraph">Diagnóstico: {room.diagnosis}</p>
            <p className="parragraph">Tratamiento: {room.treatment}</p>
        </div>
    );
}

export default RoomCard