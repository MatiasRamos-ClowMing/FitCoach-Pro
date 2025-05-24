import React from 'react';

const ExerciseTypeCard = ({ exerciseType }) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold mb-2 text-yellow-400">{exerciseType.name}</h3>
      <p className="text-gray-400">{exerciseType.description}</p>
    </div>
  );
};

export default ExerciseTypeCard;