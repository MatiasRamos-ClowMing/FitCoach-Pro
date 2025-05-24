import React from 'react';

const ProgressPhotoCard = ({ photo }) => {
  return (
    <div className="bg-gray-800 text-white rounded-xl shadow-md overflow-hidden">
      <img 
        src={photo.url} 
        alt={`${photo.type} ${photo.date}`}
        className="w-full h-64 object-cover"
      />
      <div className="p-3 text-center">
        <p className="text-sm font-medium text-gray-400">{photo.date}</p>
        <p className="text-xs text-gray-500 capitalize">{photo.type}</p>
      </div>
    </div>
  );
};

export default ProgressPhotoCard;