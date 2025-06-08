import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navigation/Navbar';
import Button from '../components/Especializations/Button';

import '../styles/Doctors.css'

const Doctors = () => {
    const { name } = useParams();
    const [especialidades, setEspecialidades] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Para el formulario
    const [form, setForm] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        correo: '',
        fecha_nacimiento: ''
    });

    // Obtener especialidades del backend
    useEffect(() => {
        fetch("http://localhost:8000/especialidades/")
            .then(res => res.json())
            .then(data => setEspecialidades(data));
    }, []);

    // Buscar el id de la especialidad por nombre
    const especialidad = especialidades.find(e => e.nombre === name);
    const esp_id = especialidad ? especialidad.id : null;

    // Obtener médicos de la especialidad
    useEffect(() => {
        if (!esp_id) {
            setDoctors([]);
            setLoading(false);
            return;
        }
        setLoading(true);
        fetch(`http://localhost:8000/medicos/especialidad/${esp_id}`)
            .then(res => res.json())
            .then(data => {
                setDoctors(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [esp_id]);

    // Manejar cambios en el formulario
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError(null); // Limpiar error cuando el usuario modifica el formulario
    };

    // Manejar envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!esp_id) return;
        try {
            // 1. Crear médico
            const res = await fetch('http://localhost:8000/medicos/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });
            if (res.ok) {
                const medico = await res.json();
                // 2. Asociar médico a especialidad
                await fetch(`http://localhost:8000/medicos/${medico.id}/especialidad/${esp_id}`, {
                    method: 'POST'
                });
                setForm({ nombre: '', apellido: '', telefono: '', correo: '', fecha_nacimiento: '' });
                setError(null);
                setLoading(true);
                const doctorsRes = await fetch(`http://localhost:8000/medicos/especialidad/${esp_id}`);
                const data = await doctorsRes.json();
                setDoctors(data);
                setLoading(false);
            } else {
                const errorData = await res.json();
                if (res.status === 500 && errorData.detail?.includes('medicos_correo_key')) {
                    setError('Este correo ya está registrado para otro médico');
                } else if (res.status === 500 && errorData.detail?.includes('medicos_telefono_key')) {
                    setError('Este teléfono ya está registrado para otro médico');
                } else {
                    setError('Error al crear el médico. Por favor, intenta de nuevo.');
                }
            }
        } catch (error) {
            setError('Error de conexión. Por favor, intenta de nuevo.');
        }
        setLoading(false);
    };

    return(
        <div className="Doctors-page">
            <Navbar />
            <div className="second-slide">
                <h1 className='header'>{name}</h1>

                {/* Formulario estilizado para agregar médico */}
                <div className="form-container">
                    <h2>Agregar Nuevo Médico</h2>
                    <form onSubmit={handleSubmit} className="doctor-form">
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre:</label>
                            <input
                                id="nombre"
                                name="nombre"
                                value={form.nombre}
                                onChange={handleChange}
                                placeholder="Nombre"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="apellido">Apellido:</label>
                            <input
                                id="apellido"
                                name="apellido"
                                value={form.apellido}
                                onChange={handleChange}
                                placeholder="Apellido"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="telefono">Teléfono:</label>
                            <input
                                id="telefono"
                                name="telefono"
                                value={form.telefono}
                                onChange={handleChange}
                                placeholder="Teléfono"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="correo">Correo:</label>
                            <input
                                id="correo"
                                name="correo"
                                type="email"
                                value={form.correo}
                                onChange={handleChange}
                                placeholder="correo@ejemplo.com"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="fecha_nacimiento">Fecha de Nacimiento:</label>
                            <input
                                id="fecha_nacimiento"
                                name="fecha_nacimiento"
                                type="date"
                                value={form.fecha_nacimiento}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {error && <div className="error-message">{error}</div>}
                        <button type="submit" className="submit-button">
                            Agregar Médico
                        </button>
                    </form>
                </div>

                {/* Lista de médicos */}
                {loading ? (
                    <p>Cargando médicos...</p>
                ) : doctors.length === 0 ? (
                    <p className='no-doctors'>No hay doctores registrados para esta especialidad.</p>
                ) : (
                    <ul className="doctors-list">
                        {doctors.map((doctor, index) => (
                            <li key={doctor.id || index}>
                                <div className="doctor-card">
                                    <h3 className="doctor-name">
                                        {doctor.nombre} {doctor.apellido}
                                    </h3>
                                    <div className="doctor-info">
                                        <i className="fas fa-envelope"></i>
                                        {doctor.correo}
                                    </div>
                                    <div className="doctor-info">
                                        <i className="fas fa-phone"></i>
                                        {doctor.telefono}
                                    </div>
                                    <div className="doctor-actions">
                                        <button 
                                            className="submit-button"
                                            onClick={() => handleEdit(doctor.id)}
                                            style={{fontSize: '0.9rem', padding: '0.5rem 1rem'}}
                                        >
                                            Editar
                                        </button>
                                        <button 
                                            className="submit-button"
                                            onClick={() => handleDelete(doctor.id)}
                                            style={{
                                                fontSize: '0.9rem', 
                                                padding: '0.5rem 1rem',
                                                backgroundColor: '#dc3545'
                                            }}
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Doctors;