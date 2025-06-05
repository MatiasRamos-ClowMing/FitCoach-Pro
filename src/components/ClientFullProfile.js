import React from 'react';
// Importar mocks directamente ya que los datos se editan en ClientsList
import paymentMethods from '../mock/paymentMethods';
import stretchingExercises from '../mock/stretchingExercises';
import clientMedicalInfo from '../mock/clientMedicalInfo';
import PaymentMethodCard from './PaymentMethodCard';
import StretchingExerciseCard from './StretchingExerciseCard';
import MedicalInfoCard from './MedicalInfoCard';
import ClientContactInfo from './ClientContactInfo';

const ClientFullProfile = ({ client }) => {
  // Usar los datos del cliente pasado como prop, que ya incluye los campos
  const clientPaymentMethods = client.paymentMethods || [];
  const clientStretchingExercises = client.stretchingExercises || [];
  const clientMedicalInfo = client.medicalInfo || [];

  return (
    <div className="p-6 space-y-6 bg-gray-900 text-white">
      <ClientContactInfo client={client} />
      
      <div className="bg-gray-800 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold mb-4 text-yellow-400">Problemas a Tratar</h2>
        <ul className="space-y-2">
          {(client.targetProblems || []).map((problem, index) => (
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
          {(client.muscleLessons || []).map((lesson, index) => (
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
          {clientPaymentMethods.map((method, index) => ( // Usar datos del cliente
            <PaymentMethodCard key={index} method={method} />
          ))}
        </div>
      </div>
      
      <div className="bg-gray-800 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold mb-4 text-yellow-400">Ejercicios de Estiramiento Recomendados</h2>
        <div className="space-y-3">
          {clientStretchingExercises.map((exercise, index) => ( // Usar datos del cliente
            <StretchingExerciseCard key={index} exercise={exercise} />
          ))}
        </div>
      </div>
      
      <div className="bg-gray-800 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold mb-4 text-yellow-400">Información Médica</h2>
        <div className="space-y-3">
          {clientMedicalInfo.map((condition, index) => ( // Usar datos del cliente
            <MedicalInfoCard key={index} condition={condition} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientFullProfile;

// DONE