import React, { useState } from 'react';
import '../../styles/Labs.css';

const AddLabsForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    labname: '',
    resultUpdate: '',
    lastVisit: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      lastname: '',
      labname: '',
      resultUpdate: '',
      lastVisit: ''
    });
  };

  return (
    <form className="add-labs-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Nuevo Laboratorio</h2>
      <div className="form-grid">
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Nombre del paciente" required />
        <input name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Apellido" required />
        <input name="labname" value={formData.labname} onChange={handleChange} placeholder="Nombre del laboratorio" required />
        <input name="resultUpdate" value={formData.resultUpdate} onChange={handleChange} placeholder="Estado del laboratorio" required />
        <input type="date" name="lastVisit" value={formData.lastVisit} onChange={handleChange} required />
      </div>
      <button type="submit" className="add-labs-button">Guardar</button>
    </form>
  );
};

export default AddLabsForm;
