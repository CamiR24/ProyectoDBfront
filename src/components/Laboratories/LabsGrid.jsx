import LabsCard from "./LabsCard";

export default function LabsGrid({ patients }) {

    return (
        <div className="labs_grid">
        {patients.map((patient) => (
            <LabsCard key={patient.id} patient={patient} />
        ))}
        </div>
    );
}