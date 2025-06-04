import RoomCard from "./RoomCard";

export default function RoomGrid({ rooms }) {

    return (
        <div className="room_grid">
        {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
        ))}
        </div>
    );
}