import React, { useState, useContext } from 'react';
import progressPhotos from '../mock/progressPhotos';
import bodyMeasurements from '../mock/bodyMeasurements';
import ProgressPhotoCard from './ProgressPhotoCard';
import MeasurementInput from './MeasurementInput';
import { AuthContext } from './AuthProvider';

const ProgressSection = () => {
  const { currentUser } = useContext(AuthContext);
  const clientId = currentUser?.id; // Asumimos que el ID del cliente es el ID del usuario logueado

  const clientPhotos = progressPhotos.filter(photo => photo.clientId === clientId);
  const clientMeasurements = bodyMeasurements.filter(measurement => measurement.clientId === clientId);

  // Simular agregar nueva medida (en un caso real, se actualizaría el mock o API)
  const handleSaveMeasurement = (newMeasurement) => {
    const today = new Date().toISOString().split('T')[0];
    const measurement = {
      id: bodyMeasurements.length + 1,
      clientId: clientId,
      date: today,
      ...newMeasurement
    };
    bodyMeasurements.push(measurement); // Esto modifica el mock directamente (solo para demo)
    // En una app real, harías una llamada a API y actualizarías el estado local
    console.log("Medida guardada (simulado):", measurement);
    // Forzar re-render para mostrar la nueva medida (no ideal en React, pero simple para demo)
    window.location.reload(); 
  };

  // Simular subir foto (en un caso real, se subiría a un servidor)
  const handleUploadPhoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const today = new Date().toISOString().split('T')[0];
        const newPhoto = {
          id: progressPhotos.length + 1,
          clientId: clientId,
          date: today,
          type: 'frontal', // Asumimos frontal por simplicidad
          url: reader.result // URL base64 (solo para demo, no para producción)
        };
        progressPhotos.push(newPhoto); // Modifica el mock (solo para demo)
        console.log("Foto subida (simulado):", newPhoto);
        window.location.reload();
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-6 bg-gray-900 text-white">
      <h2 className="text-2xl font-bold mb-6">Mi Progreso Físico</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <MeasurementInput onSave={handleSaveMeasurement} />
        
        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-4 text-yellow-400">Subir Fotos de Progreso</h3>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleUploadPhoto} 
            className="w-full text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-yellow-400 file:text-black hover:file:bg-yellow-500"
          />
          <p className="text-sm text-gray-500 mt-2">Sube fotos frontal, perfil y espalda para un mejor seguimiento.</p>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Historial de Medidas</h3>
        {clientMeasurements.length > 0 ? (
          <div className="bg-gray-800 p-6 rounded-xl shadow-md">
            {/* Aquí iría un gráfico real con una librería como Chart.js o Recharts */}
            <div className="h-64 flex items-center justify-center bg-gray-700 rounded-lg">
              <p className="text-gray-500">Gráfico de medidas aquí</p>
            </div>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Fecha</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Peso (kg)</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Cintura (cm)</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Pecho (cm)</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Brazos (cm)</th>
                  </tr>
                </thead>
                <tbody className="bg-gray-800 divide-y divide-gray-700">
                  {clientMeasurements.map(m => (
                    <tr key={m.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{m.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{m.weight}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{m.waist}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{m.chest}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{m.arms}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="text-center py-8 bg-gray-800 rounded-lg">
            <p className="text-gray-500">No hay medidas registradas aún.</p>
          </div>
        )}
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Fotos de Progreso</h3>
        {clientPhotos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clientPhotos.map(photo => (
              <ProgressPhotoCard key={photo.id} photo={photo} />
            ))}
          </div>
        ) : (
          <div className="text-center py-8 bg-gray-800 rounded-lg">
            <p className="text-gray-500">No hay fotos de progreso aún.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressSection;