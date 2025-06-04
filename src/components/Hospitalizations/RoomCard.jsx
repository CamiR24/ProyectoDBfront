import React from "react";

const RoomCard = ({ room }) => {
    return (
        <div className="room_card">
            <div className="room-text">
                <p className="card-title">{room.id}</p>
                <p className="parragraph">Nombre: {room.patientname}</p>
                <p className="parragraph">Diagnóstico: {room.diagnosis}</p>
                <p className="parragraph">Tratamiento: {room.treatment}</p>
            </div>
        </div>
    );
}

export default RoomCard