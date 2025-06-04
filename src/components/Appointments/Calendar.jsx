import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// Recibe value y onChange desde el padre
const CalendarWidget = ({ value, onChange }) => (
  <div className='calendario-prueba'>
    <Calendar
      onChange={onChange}
      value={value}
      className="custom-calendar"
    />
  </div>
);

export default CalendarWidget;