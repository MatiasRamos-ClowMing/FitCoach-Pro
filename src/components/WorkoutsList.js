import React, { useState } from 'react';
import workouts from '../mock/workouts';
import WorkoutCard from './WorkoutCard';

const WorkoutsList = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredWorkouts = activeTab === 'all' 
    ? workouts 
    : workouts.filter(workout => workout.difficulty.toLowerCase() === activeTab);

  return (
    <div className="p-6 bg-gray-900 text-white">
      <div className="flex space-x-4 mb-6 overflow-x-auto pb-2">
        <button 
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 rounded-lg whitespace-nowrap ${activeTab === 'all' ? 'bg-yellow-400 text-black' : 'bg-gray-700 text-white'}`}
        >
          Todas
        </button>
        <button 
          onClick={() => setActiveTab('principiante')}
          className={`px-4 py-2 rounded-lg whitespace-nowrap ${activeTab === 'principiante' ? 'bg-yellow-400 text-black' : 'bg-gray-700 text-white'}`}
        >
          Principiante
        </button>
        <button 
          onClick={() => setActiveTab('intermedio')}
          className={`px-4 py-2 rounded-lg whitespace-nowrap ${activeTab === 'intermedio' ? 'bg-yellow-400 text-black' : 'bg-gray-700 text-white'}`}
        >
          Intermedio
        </button>
        <button 
          onClick={() => setActiveTab('avanzado')}
          className={`px-4 py-2 rounded-lg whitespace-nowrap ${activeTab === 'avanzado' ? 'bg-yellow-400 text-black' : 'bg-gray-700 text-white'}`}
        >
          Avanzado
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWorkouts.map(workout => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </div>
  );
};

export default WorkoutsList;