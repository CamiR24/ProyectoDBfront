import React from "react";
import "../../styles/Navbar.css";
import logo from "../../assets/logo.png"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="rectangle-navbar"></div>
      <header className="main-header">
          <nav className="main-nav">
              <div className="nav-item" onClick={() => navigate("/")}>Pacientes</div>
              <div className="nav-item" onClick={() => navigate("/especializations")}>Médicos</div>
              <div className="nav-item" onClick={() => navigate("/labs")}>Laboratorios</div>
              <div className="nav-item" onClick={() => navigate("/results")}>Resultados</div>
              <div className="nav-item" onClick={() => navigate("/appointments")}>Citas</div>
              <div className="nav-item" onClick={() => navigate("/hospitalizations")}>Hospitalizaciones</div>
          </nav>
          <div className="logo-container">
              <img src={logo} className="logo" />
          </div>
      </header>
    </div>
  );
};

export default Navbar;