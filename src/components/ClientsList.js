import React, { useState } from 'react';
import clients from '../mock/clients';
import clientPhotos from '../mock/clientPhotos';
import ClientCard from './ClientCard';
import PhotoProgressTimeline from './PhotoProgressTimeline';
import ClientFullProfile from './ClientFullProfile';

const ClientsList = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedClient, setSelectedClient] = useState(null);

  const filteredClients = activeTab === 'all' 
    ? clients 
    : clients.filter(client => client.goals.toLowerCase().includes(activeTab.toLowerCase()));

  const clientPhotosFiltered = selectedClient 
    ? clientPhotos.filter(photo => photo.clientId === selectedClient.id)
    : [];

  return (
    <div className="p-6 bg-gray-900 text-white">
      {selectedClient ? (
        <ClientFullProfile client={selectedClient} />
      ) : (
        <>
          <div className="flex space-x-4 mb-6 overflow-x-auto pb-2">
            <button 
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg whitespace-nowrap ${activeTab === 'all' ? 'bg-yellow-400 text-black' : 'bg-gray-700 text-white'}`}
            >
              Todos
            </button>
            <button 
              onClick={() => setActiveTab('masa')}
              className={`px-4 py-2 rounded-lg whitespace-nowrap ${activeTab === 'masa' ? 'bg-yellow-400 text-black' : 'bg-gray-700 text-white'}`}
            >
              Masa Muscular
            </button>
            <button 
              onClick={() => setActiveTab('grasa')}
              className={`px-4 py-2 rounded-lg whitespace-nowrap ${activeTab === 'grasa' ? 'bg-yellow-400 text-black' : 'bg-gray-700 text-white'}`}
            >
              Perder Grasa
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredClients.map(client => (
              <div 
                key={client.id} 
                onClick={() => setSelectedClient(client)}
                className={`cursor-pointer ${selectedClient?.id === client.id ? 'ring-2 ring-yellow-400 rounded-lg' : ''}`}
              >
                <ClientCard client={client} />
              </div>
            ))}
          </div>

          {selectedClient && (
            <PhotoProgressTimeline photos={clientPhotosFiltered} />
          )}
        </>
      )}
    </div>
  );
};

export default ClientsList;