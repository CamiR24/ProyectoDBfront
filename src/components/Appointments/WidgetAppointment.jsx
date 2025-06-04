import React from 'react';

const WidgetAppointment = ({ appointment }) => {
  const { patient, date, doctor } = appointment;

  return (
    <div className="widget-appointment">
      <p className='text_appointment'>{patient}</p>
      <p className='text_appointment'>{doctor}</p>
      <p className='text_appointment'>
        Hora: {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </p>
    </div>
  );
};

export default WidgetAppointment;