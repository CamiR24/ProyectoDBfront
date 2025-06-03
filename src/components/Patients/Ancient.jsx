import React from "react";

import antiguos from '../../assets/antiguos.png'

const Ancient = () => {
  return (
    <div className="ancient_patient_row">
        <div className="container_text_ancient">
            <h1 className="header">Pacientes antiguos</h1>
        </div>
        <div className="image_container_ancient">
            <img src={antiguos} className="antiguos" />
        </div>
    </div>
  );
};

export default Ancient;