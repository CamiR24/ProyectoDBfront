import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navigation/Navbar';
import PatientGrid from '../components/Laboratories/PatientGrid';
import LabsGrid from '../components/Laboratories/LabsGrid'
import AddLabsForm from '../components/Laboratories/AddLabsForm.jsx';
import '../styles/Labs.css'

const Labs = () => {
    const [showForm, setShowForm] = useState(false);
    const [labs, setLabs] = useState([]);
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const [labsRes, patientsRes] = await Promise.all([
                fetch('http://localhost:8000/laboratorios/recientes'),
                fetch('http://localhost:8000/pacientes/recientes')
            ]);
            if (!labsRes.ok || !patientsRes.ok) {
                throw new Error('Error al cargar datos');
            }
            const labsData = await labsRes.json();
            const patientsData = await patientsRes.json();
            setLabs(labsData);
            setPatients(patientsData);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleAddLab = (newLab) => {
        // Aquí podrías hacer un POST al backend y luego recargar la lista
        setShowForm(false);
        fetchData();
    };

    return (
        <div className="Hospitalizations-page">
            <Navbar />
            <div className="second-slide">
                <h1 className="header">Laboratorios recientes</h1>
                <button className="add-labs-button" onClick={() => setShowForm(!showForm)}>
                    {showForm ? 'Cancelar' : 'Añadir laboratorios'}
                </button>
                {showForm && <AddLabsForm onSubmit={handleAddLab} />}
                {error && <div className="error-message">{error}</div>}
                {loading ? (
                    <div className="loading-spinner">Cargando datos...</div>
                ) : (
                    <>
                        <LabsGrid labs={labs} patients={patients}/>
                        <h1 className="header">Pacientes recientes</h1>
                        <PatientGrid patients={patients}/>
                    </>
                )}
            </div>
        </div>
    );
};

export default Labs