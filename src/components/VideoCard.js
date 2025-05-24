import React from 'react';

const VideoCard = ({ video }) => {
  return (
    <div className="bg-gray-800 text-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-40 object-cover"
        />
        <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 text-yellow-400">{video.title}</h3>
        <div className="flex justify-between text-sm text-gray-400">
          <span>{video.level}</span>
          <span>{video.views} vistas</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;