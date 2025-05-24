import React from 'react';
import paymentMethods from '../mock/paymentMethods';
import stretchingExercises from '../mock/stretchingExercises';
import clientMedicalInfo from '../mock/clientMedicalInfo';
import PaymentMethodCard from './PaymentMethodCard';
import StretchingExerciseCard from './StretchingExerciseCard';
import MedicalInfoCard from './MedicalInfoCard';
import ClientContactInfo from './ClientContactInfo';

const ClientFullProfile = ({ client }) => {
  return (
    <div className="p-6 space-y-6 bg-gray-900 text-white">
      <ClientContactInfo client={client} />
      
      <div className="bg-gray-800 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold mb-4 text-yellow-400">Problemas a Tratar</h2>
        <ul className="space-y-2">
          {client.targetProblems.map((problem, index) => (
            <li key={index} className="flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              {problem}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-gray-800 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold mb-4 text-yellow-400">Lecciones Musculares</h2>
        <ul className="space-y-2">
          {client.muscleLessons.map((lesson, index) => (
            <li key={index} className="flex items-center">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
              {lesson}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-gray-800 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold mb-4 text-yellow-400">Métodos de Pago</h2>
        <div className="space-y-3">
          {paymentMethods.map(method => (
            <PaymentMethodCard key={method.id} method={method} />
          ))}
        </div>
      </div>
      
      <div className="bg-gray-800 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold mb-4 text-yellow-400">Ejercicios de Estiramiento Recomendados</h2>
        <div className="space-y-3">
          {stretchingExercises.map(exercise => (
            <StretchingExerciseCard key={exercise.id} exercise={exercise} />
          ))}
        </div>
      </div>
      
      <div className="bg-gray-800 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold mb-4 text-yellow-400">Información Médica</h2>
        <div className="space-y-3">
          {clientMedicalInfo.map(condition => (
            <MedicalInfoCard key={condition.id} condition={condition} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientFullProfile;