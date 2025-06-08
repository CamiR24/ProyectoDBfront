import LabsCard from "./LabsCard";

export default function LabsGrid({ patients, labs }) {

    return (
        <div className="labs_grid">
        {patients.map((patient) => (
            <LabsCard key={patient.id} patient={patient} />
        ))}
        {labs.map(lab => (
          <div key={lab.id}>
            <div>Nombre: {lab.paciente_nombre} {lab.paciente_apellido}</div>
            <div>Laboratorio: {lab.laboratorio_nombre}</div>
            <div>Médico: {lab.medico_nombre}</div>
            <div>Fecha: {lab.fecha}</div>
            <div>Resultado: {lab.resultado}</div>
          </div>
        ))}
        </div>
    );
}

