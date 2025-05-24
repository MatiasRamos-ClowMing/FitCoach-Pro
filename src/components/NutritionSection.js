import React, { useState } from 'react';
import trainingVideos from '../mock/trainingVideos';
import healthySnacks from '../mock/healthySnacks';
import gymLocation from '../mock/gymLocation';
import VideoCard from './VideoCard';
import SnackCard from './SnackCard';
import LocationCard from './LocationCard';

const NutritionSection = () => {
  const [activeTab, setActiveTab] = useState('videos');

  return (
    <div className="p-6 bg-gray-900 text-white">
      <div className="flex space-x-4 mb-6 overflow-x-auto pb-2">
        <button 
          onClick={() => setActiveTab('videos')}
          className={`px-4 py-2 rounded-lg whitespace-nowrap ${activeTab === 'videos' ? 'bg-yellow-400 text-black' : 'bg-gray-700 text-white'}`}
        >
          Videos
        </button>
        <button 
          onClick={() => setActiveTab('nutrition')}
          className={`px-4 py-2 rounded-lg whitespace-nowrap ${activeTab === 'nutrition' ? 'bg-yellow-400 text-black' : 'bg-gray-700 text-white'}`}
        >
          Nutrición
        </button>
        <button 
          onClick={() => setActiveTab('location')}
          className={`px-4 py-2 rounded-lg whitespace-nowrap ${activeTab === 'location' ? 'bg-yellow-400 text-black' : 'bg-gray-700 text-white'}`}
        >
          Ubicación
        </button>
      </div>

      {activeTab === 'videos' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trainingVideos.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      )}

      {activeTab === 'nutrition' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {healthySnacks.map(snack => (
            <SnackCard key={snack.id} snack={snack} />
          ))}
        </div>
      )}

      {activeTab === 'location' && (
        <div className="max-w-2xl mx-auto">
          <LocationCard location={gymLocation} />
        </div>
      )}
    </div>
  );
};

export default NutritionSection;