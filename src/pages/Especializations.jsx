import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navigation/Navbar';
import Button from '../components/Especializations/Button';
import EspecializationGrid from '../components/Especializations/EspecializationGrid';

import '../styles/Especializations.css'

const Especializations = () => {
    const [especializations, setEspecializations] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/especialidades/")
            .then(res => res.json())
            .then(data => setEspecializations(data));
    }, []);

    return(
        <div className="Especializations-page">
            <Navbar />
            <div className="second-slide">
                <Button text={'Agregar especialidad'}/>
                <EspecializationGrid especializations={especializations} />
            </div>
        </div>
    );
};

export default Especializations