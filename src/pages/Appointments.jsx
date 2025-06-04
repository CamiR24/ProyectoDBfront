import React, { useState } from 'react'
import Navbar from '../components/Navigation/Navbar';
import CalendarWidget from '../components/Appointments/Calendar';
import WidgetAppointment from '../components/Appointments/WidgetAppointment';

import '../styles/Appointments.css'

const appointmentsMock = [
    {
      id: 1,
      patient: 'Juan Pérez',
      doctor:'doctor',
      date: new Date(2025, 5, 2, 9, 0),
      reason: 'Chequeo general',
    },
    {
      id: 2,
      patient: 'Ana Gómez',
      doctor:'doctor',
      date: new Date(2025, 5, 2, 14, 0),
      reason: 'Consulta dermatológica',
    },
    {
      id: 3,
      patient: 'Luis Martínez',
      doctor:'doctor',
      date: new Date(2025, 5, 3, 10, 30),
      reason: 'Revisión de resultados',
    },
  ];

const Appointments = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const isSameDay = (d1, d2) =>
        d1.getDate() === d2.getDate() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getFullYear() === d2.getFullYear();

    const appointmentsForDay = appointmentsMock.filter((appt) =>
        isSameDay(appt.date, selectedDate)
    );

    return(
        <div className="Appointments-page">
            <Navbar />
            <div className="second-slide">
                <CalendarWidget value={selectedDate} onChange={setSelectedDate}/>
                <h1 className='header'>Citas {selectedDate.toLocaleDateString()}</h1>
                {appointmentsForDay.length === 0 ? (
                    <p className='no-appointment'>No hay citas para este día.</p>
                ) : (
                  appointmentsForDay.map((appointment) => (
                    <WidgetAppointment key={appointment.id} appointment={appointment} />
                  ))
                )}
              </div>
            </div>
    );
  
};

export default Appointments