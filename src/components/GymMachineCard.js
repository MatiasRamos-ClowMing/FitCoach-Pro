import React from 'react';

const GymMachineCard = ({ machine }) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold">{machine.name}</h3>
        <span className="px-3 py-1 bg-green-700 text-green-200 rounded-full text-sm">
          {machine.difficulty}
        </span>
      </div>
      <div className="space-y-2">
        <div className="flex items-center">
          <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
          <span>Tipo: {machine.type}</span>
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
          <span>Grupo muscular: {machine.muscleGroup}</span>
        </div>
      </div>
    </div>
  );
};

export default GymMachineCard;