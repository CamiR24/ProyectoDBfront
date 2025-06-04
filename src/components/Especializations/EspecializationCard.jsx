import React from "react";
import { Link } from 'react-router-dom';

const EspecializationCard = ({ especialization }) => {
    return (
        <Link to={`/especialidad/${especialization.name}`} className="especialization-link">
            <div className="especialization_card">
                <div className="especialization-picture-container">
                    <img src={especialization.picture} className="especialization-picture" />
                </div>
                <div className="especialization-text">
                    <h1 className="header"> {especialization.name} </h1>
                    <p className="parragraph"> {especialization.description} </p>
                </div>
            </div>
        </Link>
    );
}

export default EspecializationCard