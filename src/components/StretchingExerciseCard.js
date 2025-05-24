import React from 'react';

const StretchingExerciseCard = ({ exercise }) => {
  return (
    <div className="bg-gray-700 text-white p-4 rounded-xl shadow-md">
      <h3 className="font-bold text-lg text-yellow-400">{exercise.name}</h3>
      <div className="flex justify-between mt-2 text-sm text-gray-400">
        <span>{exercise.duration}</span>
        <span>{exercise.area}</span>
      </div>
    </div>
  );
};

export default StretchingExerciseCard;