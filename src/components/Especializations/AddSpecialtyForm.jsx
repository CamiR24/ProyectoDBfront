import React, { useState } from 'react';

const AddSpecialtyForm = ({ onSubmit, onCancel }) => {
    const [form, setForm] = useState({
        nombre: '',
        descripcion: ''
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:8000/especialidades/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });

            if (res.ok) {
                const data = await res.json();
                onSubmit(data);
                setForm({ nombre: '', descripcion: '' });
            } else {
                const errorData = await res.json();
                setError(errorData.detail || 'Error al crear la especialidad');
            }
        } catch (error) {
            setError('Error de conexión');
        }
    };

    return (
        <div className="form-container">
            <h2>Agregar Nueva Especialidad</h2>
            <form onSubmit={handleSubmit} className="specialty-form">
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        id="nombre"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        placeholder="Nombre de la especialidad"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="descripcion">Descripción:</label>
                    <textarea
                        id="descripcion"
                        name="descripcion"
                        value={form.descripcion}
                        onChange={handleChange}
                        placeholder="Descripción de la especialidad"
                        required
                        rows="4"
                    />
                </div>
                {error && <div className="error-message">{error}</div>}
                <div className="form-actions">
                    <button type="submit" className="submit-button">
                        Agregar Especialidad
                    </button>
                    <button 
                        type="button" 
                        className="cancel-button"
                        onClick={onCancel}
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddSpecialtyForm;