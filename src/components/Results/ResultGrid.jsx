import ResultCard from "./ResultCard";

export default function ResultGrid({ patients }) {

    return (
        <div className="result_grid">
        {patients.map((patient) => (
            <ResultCard key={patient.id} patient={patient} />
        ))}
        </div>
    );
}