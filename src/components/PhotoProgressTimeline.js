import React from 'react';
import ClientPhotoCard from './ClientPhotoCard';

const PhotoProgressTimeline = ({ photos }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold mb-4">Registro Fotográfico</h3>
      {photos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map(photo => (
            <ClientPhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
      ) : (
        <div className="text-center py-8 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No hay fotos de progreso aún</p>
        </div>
      )}
    </div>
  );
};

export default PhotoProgressTimeline;