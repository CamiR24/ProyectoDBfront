import React from "react";

const EspecializationCard = ({ especialization }) => {
    return (
        <div className="especialization_card">
            <div className="especialization-picture-container">
                <img src={especialization.picture} className="especialization-picture" />
            </div>
            <div className="especialization-text">
                <h1 className="header"> {especialization.name} </h1>
                <p className="parragraph"> {especialization.description} </p>
            </div>
        </div>
    );
}

export default EspecializationCard