import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navigation/Navbar';
import EspecializationGrid from '../components/Especializations/EspecializationGrid';
import AddSpecialtyForm from '../components/Especializations/AddSpecialtyForm';
import '../styles/Especializations.css'

const Especializations = () => {
    const [especializations, setEspecializations] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchEspecializations();
    }, []);

    const fetchEspecializations = async () => {
        try {
            setLoading(true);
            setError(null);
            const res = await fetch("http://localhost:8000/especialidades/");
            if (!res.ok) {
                throw new Error('Error al cargar las especialidades');
            }
            const data = await res.json();
            setEspecializations(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleAddSpecialty = async (newSpecialty) => {
        try {
            setError(null);
            await fetchEspecializations(); // Recargar lista completa
            setShowForm(false);
        } catch (err) {
            setError('Error al actualizar la lista de especialidades');
        }
    };

    return (
        <div className="Especializations-page">
            <Navbar />
            <div className="content-container">
                <div className="header-section">
                    <h1>Especialidades Médicas</h1>
                    <button 
                        className={`add-button ${showForm ? 'cancel' : ''}`}
                        onClick={() => setShowForm(!showForm)}
                    >
                        {showForm ? 'Cancelar' : 'Agregar especialidad'}
                    </button>
                </div>

                {error && (
                    <div className="error-message">
                        {error}
                        <button onClick={fetchEspecializations}>
                            Reintentar
                        </button>
                    </div>
                )}
                
                {showForm && (
                    <AddSpecialtyForm 
                        onSubmit={handleAddSpecialty}
                        onCancel={() => setShowForm(false)}
                    />
                )}
                
                {loading ? (
                    <div className="loading-spinner">
                        Cargando especialidades...
                    </div>
                ) : (
                    <EspecializationGrid 
                        especializations={especializations}
                        onRefresh={fetchEspecializations}
                    />
                )}
            </div>
        </div>
    );
};

export default Especializations;