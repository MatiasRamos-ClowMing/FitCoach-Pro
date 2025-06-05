import React from 'react';

const ClientCard = ({ client }) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <img 
          src={client.profilePhoto || 'https://via.placeholder.com/150?text=No+Foto'} // Mostrar foto o placeholder
          alt={client.name}
          className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-yellow-400"
        />
        <div>
          <h3 className="text-xl font-bold">{client.name}</h3>
          <p className="text-gray-400">{client.age} años</p>
        </div>
      </div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-yellow-400">{client.goals}</span>
        <span className="text-sm font-medium">{client.progress}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
        <div 
          className="bg-yellow-400 h-2.5 rounded-full transition-all duration-500" 
          style={{ width: `${client.progress}%` }}
        ></div>
      </div>
      <div className="flex justify-between text-sm text-gray-400">
        <span>Peso: {client.weight}kg</span>
        <span>Altura: {client.height}cm</span>
      </div>
    </div>
  );
};

export default ClientCard;

// DONE