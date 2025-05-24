import React from 'react';

const ClientContactInfo = ({ client }) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4 text-yellow-400">Información de Contacto</h2>
      
      <div className="space-y-4 text-gray-400">
        <div>
          <h3 className="font-medium text-gray-500">Correo Electrónico</h3>
          <p>{client.email}</p>
        </div>
        
        <div>
          <h3 className="font-medium text-gray-500">Dirección</h3>
          <p>{client.address}</p>
        </div>
        
        <div>
          <h3 className="font-medium text-gray-500">Horario Preferido</h3>
          <p>{client.preferredHours}</p>
        </div>
        
        <div>
          <h3 className="font-medium text-gray-500">Contacto de Emergencia</h3>
          <p>{client.emergencyContact.name} - {client.emergencyContact.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientContactInfo;