import BestPatientCard from "./BestPatientCard";

export default function PatientGrid({ patients }) {

    return (
        <div className="best_patient_grid">
        {patients.map((patient) => (
            <BestPatientCard key={patient.id} patient={patient} />
        ))}
        </div>
    );
}