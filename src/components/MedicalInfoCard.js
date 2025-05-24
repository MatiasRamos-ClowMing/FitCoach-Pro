import React from 'react';

const MedicalInfoCard = ({ condition }) => {
  return (
    <div className="bg-gray-700 text-white p-4 rounded-xl shadow-md">
      <div className="flex justify-between items-center">
        <h3 className="font-bold">{condition.condition}</h3>
        <span className={`px-2 py-1 rounded-full text-xs ${
          condition.severity === 'Leve' ? 'bg-green-700 text-green-200' :
          condition.severity === 'Moderada' ? 'bg-yellow-700 text-yellow-200' :
          'bg-red-700 text-red-200'
        }`}>
          {condition.severity}
        </span>
      </div>
      <p className="text-gray-400 mt-2">{condition.restrictions}</p>
    </div>
  );
};

export default MedicalInfoCard;