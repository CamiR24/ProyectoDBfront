import PatientCard from "./PatientCard";

const PatientGrid = ({ patients }) => {
    console.log("PatientGrid recibe:", patients);

    return (
        <div className="patient_grid">
        {patients.map((patient) => (
            <PatientCard key={patient.id} patient={patient} />
        ))}
        </div>
    );
}

export default PatientGrid;