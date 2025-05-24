import React from 'react';

const WorkoutCard = ({ workout }) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold">{workout.name}</h3>
        <span className="px-3 py-1 bg-green-700 text-green-200 rounded-full text-sm">
          {workout.difficulty}
        </span>
      </div>
      <p className="text-gray-400 mb-4">{workout.duration} minutos</p>
      <div>
        <h4 className="font-medium mb-2 text-yellow-400">Ejercicios:</h4>
        <ul className="space-y-1">
          {workout.exercises.map((exercise, index) => (
            <li key={index} className="flex items-center">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
              {exercise}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkoutCard;