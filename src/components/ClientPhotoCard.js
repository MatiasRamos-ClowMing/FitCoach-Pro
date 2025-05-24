import React from 'react';

const ClientPhotoCard = ({ photo }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={photo.photoUrl} 
        alt={`Progreso ${photo.date}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600">{photo.date}</span>
          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
            Progreso
          </span>
        </div>
        <p className="text-gray-700">{photo.notes}</p>
      </div>
    </div>
  );
};

export default ClientPhotoCard;