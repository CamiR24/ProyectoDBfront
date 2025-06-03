import React from "react";
import "../../styles/Navbar.css";

import actuales from "../../assets/actuales.png"

const Actual = () => {
  return (
    <div className="actual_patient_row">
        <div className="image_container">
            <img src={actuales} className="actuales" />
        </div>
        <div className="actual_patient_text">
            <h1 className="header">Pacientes actuales</h1>
            <p className="parragraph">Procuramos ofrecer a todos nuestros pacientes los mejores servicios y la mayor atención para que logren recuperarse en el menor tiempo posible. Agradecemos su confianza en nosotros y su preferencia.</p>
        </div>
    </div>
  );
};

export default Actual;