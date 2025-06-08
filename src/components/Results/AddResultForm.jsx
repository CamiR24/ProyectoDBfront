import React, { useState } from 'react';
import '../../styles/Results.css';

const AddResultForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    birthday: '',
    sex: '',
    lastUpdate: '',
    maindoc: '',
    labname: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      lastname: '',
      birthday: '',
      sex: '',
      lastUpdate: '',
      maindoc: '',
      labname: ''
    });
  };

  return (
    <form className="add-result-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Nuevo Paciente</h2>
      <div className="form-grid">
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Nombre" required />
        <input name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Apellido" required />
        <input type="date" name="birthday" value={formData.birthday} onChange={handleChange} placeholder="Fecha de nacimiento" required />
        <select name="sex" value={formData.sex} onChange={handleChange} required>
          <option value="">Sexo</option>
          <option value="Femenino">Femenino</option>
          <option value="Masculino">Masculino</option>
        </select>
        <input type="date" name="lastUpdate" value={formData.lastUpdate} onChange={handleChange} placeholder="Último laboratorio" required />
        <input name="maindoc" value={formData.maindoc} onChange={handleChange} placeholder="Médico de cabecera" required />
        <input name="labname" value={formData.labname} onChange={handleChange} placeholder="Nombre de laboratorio" required />
      </div>
      <button type="submit" className="add-result-button">Guardar</button>
    </form>
  );
};

export default AddResultForm;
