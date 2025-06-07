import PatientCard from "./PatientCard";

export default function PatientGrid({ patients }) {

    return (
        <div className="recent_patient_grid">
        {patients.map((patient) => (
            <PatientCard key={patient.id} patient={patient} />
        ))}
        </div>
    );
}