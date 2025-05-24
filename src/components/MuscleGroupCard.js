import React from 'react';

const MuscleGroupCard = ({ muscleGroup }) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold mb-3 text-yellow-400">{muscleGroup.name}</h3>
      <div className="space-y-2">
        {muscleGroup.muscles.map((muscle, index) => (
          <div key={index} className="flex items-center">
            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
            <span>{muscle}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MuscleGroupCard;