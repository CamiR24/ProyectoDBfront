import EspecializationCard from "./EspecializationCard";

import cardio from '../../assets/cardio.png'
import neuro from '../../assets/neuro.png'
import surgery from '../../assets/surgery.png'
import oncology from '../../assets/oncology.png'
import ped from '../../assets/ped.png'
import psiquiatria from '../../assets/psiquiatria.png'
import derm from '../../assets/derm.png'
import geriatria from '../../assets/geriatria.png'

const especializationImages = {
    "Cardiología": cardio,
    "Neurología": neuro,
    "Cirujía": surgery,
    "Oncología": oncology,
    "Pediatría": ped,
    "Psiquiatría": psiquiatria,
    "Dermatología": derm,
    "Geriatría": geriatria,
};

const EspecializationGrid = ({ especializations }) => {
    return (
        <div className="especialization-grid">
            {especializations.map((especialization) => (
                <EspecializationCard
                    key={especialization.id}
                    especialization={{
                        name: especialization.nombre,
                        description: especialization.descripcion,
                        picture: especializationImages[especialization.nombre] || cardio // imagen por defecto si no existe
                    }}
                />
            ))}
        </div>
    );
};

export default EspecializationGrid;