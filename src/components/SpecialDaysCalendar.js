import React from 'react';
import specialDays from '../mock/specialDays';
import SpecialDayCard from './SpecialDayCard';

const SpecialDaysCalendar = () => {
  const daysOfWeek = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
  const currentWeek = daysOfWeek.map((day, index) => {
    return {
      dayName: day,
      activity: specialDays[index % specialDays.length] // Rotar actividades
    };
  });

  return (
    <div className="p-6 bg-gray-900 text-white">
      <h2 className="text-2xl font-bold mb-6">Calendario de Días Temáticos</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 mb-8">
        {currentWeek.map((day, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow text-center">
            <p className="font-bold">{day.dayName}</p>
            <p className="text-sm text-gray-400">{day.activity.name}</p>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-bold mb-4">Detalles de las Actividades</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {specialDays.map(day => (
          <SpecialDayCard key={day.id} day={day} />
        ))}
      </div>
    </div>
  );
};

export default SpecialDaysCalendar;