import React, { useState } from 'react';
import clients from '../mock/clients';
import clientPhotos from '../mock/clientPhotos';
import ClientCard from './ClientCard';
import PhotoProgressTimeline from './PhotoProgressTimeline';
import ClientFullProfile from './ClientFullProfile';
import ClientEditForm from './ClientEditForm';
import { addClient } from '../mock/clients'; // Importar función para agregar cliente

const ClientsList = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedClient, setSelectedClient] = useState(null);
  const [editingClient, setEditingClient] = useState(null);
  const [showAddClientForm, setShowAddClientForm] = useState(false); // Estado para mostrar formulario de agregar

  const filteredClients = activeTab === 'all' 
    ? clients 
    : clients.filter(client => client.goals.toLowerCase().includes(activeTab.toLowerCase()));

  const clientPhotosFiltered = selectedClient 
    ? clientPhotos.filter(photo => photo.clientId === selectedClient.id)
    : [];

  const handleSaveClient = (updatedClient) => {
    const index = clients.findIndex(c => c.id === updatedClient.id);
    if (index !== -1) {
      clients[index] = updatedClient;
      setSelectedClient(updatedClient);
      setEditingClient(null);
      console.log("Cliente actualizado (simulado):", updatedClient);
      window.location.reload(); 
    }
  };

  const handleAddClient = (newClientData) => {
    const newClient = addClient(newClientData); // Usar la función del mock
    console.log("Nuevo cliente agregado (simulado):", newClient);
    setShowAddClientForm(false); // Ocultar formulario
    window.location.reload(); // Recargar para ver el nuevo cliente
  };

  return (
    <div className="p-6 bg-gray-900 text-white">
      {editingClient ? (
        <ClientEditForm 
          client={editingClient} 
          onSave={handleSaveClient} 
          onCancel={() => setEditingClient(null)} 
        />
      ) : showAddClientForm ? ( // Mostrar formulario de agregar cliente
        <ClientEditForm 
          client={{}} // Pasar un objeto vacío para un nuevo cliente
          onSave={handleAddClient} 
          onCancel={() => setShowAddClientForm(false)} 
        />
      ) : selectedClient ? (
        <>
          <ClientFullProfile client={selectedClient} />
          <div className="mt-6 text-center">
            <button 
              onClick={() => setEditingClient(selectedClient)}
              className="px-6 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors mr-4"
            >
              Editar Cliente
            </button>
             <button 
              onClick={() => setSelectedClient(null)}
              className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Volver a la Lista
            </button>
          </div>
        </>
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
            <button 
              onClick={() => setShowAddClientForm(true)} // Botón para agregar cliente
              className="px-4 py-2 rounded-lg whitespace-nowrap bg-green-500 text-black hover:bg-green-600 transition-colors"
            >
              Agregar Cliente
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