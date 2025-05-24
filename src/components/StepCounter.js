import React, { useState, useEffect } from 'react';

const StepCounter = () => {
  const [steps, setSteps] = useState(0);
  const [goal, setGoal] = useState(10000); // Objetivo por defecto
  const [isTracking, setIsTracking] = useState(false);

  // Simular la obtención de pasos del móvil (esto requeriría APIs nativas)
  useEffect(() => {
    let interval = null;
    if (isTracking) {
      interval = setInterval(() => {
        // Simular pasos aleatorios
        setSteps(prevSteps => prevSteps + Math.floor(Math.random() * 10) + 1);
      }, 1000); // Simular actualización cada segundo
    } else if (!isTracking && steps !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTracking, steps]);

  const toggleTracking = () => {
    setIsTracking(!isTracking);
  };

  const resetSteps = () => {
    setSteps(0);
    setIsTracking(false);
  };

  const progressPercentage = Math.min((steps / goal) * 100, 100);

  return (
    <div className="bg-gray-800 text-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-bold mb-4 text-yellow-400">Contador de Pasos</h3>
      
      <div className="text-center mb-6">
        <p className="text-gray-400">Pasos hoy:</p>
        <p className="text-4xl font-bold text-yellow-400">{steps}</p>
        <p className="text-gray-400">Objetivo: {goal} pasos</p>
      </div>

      <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
        <div 
          className="bg-yellow-400 h-2.5 rounded-full transition-all duration-500" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      <div className="flex justify-center space-x-4 mb-4">
        <button 
          onClick={toggleTracking}
          className={`px-4 py-2 rounded-lg transition-colors ${isTracking ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} text-black`}
        >
          {isTracking ? 'Detener' : 'Iniciar'}
        </button>
        <button 
          onClick={resetSteps}
          className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          Reiniciar
        </button>
      </div>

      <div className="mt-4">
        <label htmlFor="goal" className="block text-gray-400 mb-1">Establecer Objetivo:</label>
        <input 
          type="number" 
          id="goal" 
          value={goal} 
          onChange={(e) => setGoal(parseInt(e.target.value) || 0)} 
          className="w-full px-3 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>
    </div>
  );
};

export default StepCounter;