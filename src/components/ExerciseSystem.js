import React, { useState } from 'react';
import exerciseTypes from '../mock/exerciseTypes';
import muscleGroups from '../mock/muscleGroups';
import gymMachines from '../mock/gymMachines';
import ExerciseTypeCard from './ExerciseTypeCard';
import MuscleGroupCard from './MuscleGroupCard';
import GymMachineCard from './GymMachineCard';

const ExerciseSystem = () => {
  const [activeTab, setActiveTab] = useState('types');

  return (
    <div className="p-6 bg-gray-900 text-white">
      <div className="flex space-x-4 mb-6 overflow-x-auto pb-2">
        <button 
          onClick={() => setActiveTab('types')}
          className={`px-4 py-2 rounded-lg whitespace-nowrap ${activeTab === 'types' ? 'bg-yellow-400 text-black' : 'bg-gray-700 text-white'}`}
        >
          Tipos de Ejercicio
        </button>
        <button 
          onClick={() => setActiveTab('muscles')}
          className={`px-4 py-2 rounded-lg whitespace-nowrap ${activeTab === 'muscles' ? 'bg-yellow-400 text-black' : 'bg-gray-700 text-white'}`}
        >
          Grupos Musculares
        </button>
        <button 
          onClick={() => setActiveTab('machines')}
          className={`px-4 py-2 rounded-lg whitespace-nowrap ${activeTab === 'machines' ? 'bg-yellow-400 text-black' : 'bg-gray-700 text-white'}`}
        >
          Máquinas del Gimnasio
        </button>
      </div>

      {activeTab === 'types' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {exerciseTypes.map(type => (
            <ExerciseTypeCard key={type.id} exerciseType={type} />
          ))}
        </div>
      )}

      {activeTab === 'muscles' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {muscleGroups.map(group => (
            <MuscleGroupCard key={group.id} muscleGroup={group} />
          ))}
        </div>
      )}

      {activeTab === 'machines' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gymMachines.map(machine => (
            <GymMachineCard key={machine.id} machine={machine} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ExerciseSystem;