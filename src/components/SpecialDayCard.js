import React from 'react';

const SpecialDayCard = ({ day }) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-3 text-yellow-400">{day.icon}</span>
        <h3 className="text-xl font-bold">{day.name}</h3>
      </div>
      <p className="text-gray-400 mb-4">{day.description}</p>
      <div className="grid grid-cols-2 gap-4 mb-4 text-gray-400">
        <div>
          <p className="text-sm text-gray-500">Intensidad</p>
          <p className="font-medium">{day.intensity}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Duración</p>
          <p className="font-medium">{day.duration}</p>
        </div>
      </div>
      <div>
        <h4 className="font-medium mb-2 text-yellow-400">Beneficios:</h4>
        <ul className="space-y-1">
          {day.benefits.map((benefit, index) => (
            <li key={index} className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SpecialDayCard;