import React, { useState, useEffect } from 'react';

const WorkoutTimer = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isRest, setIsRest] = useState(false);
  const [workoutDuration, setWorkoutDuration] = useState(60); // Duración del ejercicio en segundos
  const [restDuration, setRestDuration] = useState(30); // Duración del descanso en segundos

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime(prevTime => {
          if (prevTime <= 1) {
            // Cambiar entre ejercicio y descanso
            setIsRest(!isRest);
            return isRest ? workoutDuration : restDuration;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time, isRest, workoutDuration, restDuration]);

  const toggleTimer = () => {
    setIsActive(!isActive);
    if (!isActive && time === 0) {
      setTime(workoutDuration); // Iniciar con duración de ejercicio
      setIsRest(false);
    }
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsRest(false);
    setTime(0);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="bg-gray-800 text-white p-6 rounded-xl shadow-md text-center">
      <h3 className="text-xl font-bold mb-4 text-yellow-400">Temporizador de Entrenamiento</h3>
      
      <div className={`text-4xl font-bold mb-4 ${isRest ? 'text-red-500' : 'text-green-500'}`}>
        {formatTime(time)}
      </div>

      <p className="text-gray-400 mb-6">
        {isActive ? (isRest ? 'Descanso' : 'Ejercicio') : 'Listo para empezar'}
      </p>

      <div className="flex justify-center space-x-4 mb-4">
        <button 
          onClick={toggleTimer}
          className={`px-4 py-2 rounded-lg transition-colors ${isActive ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} text-black`}
        >
          {isActive ? 'Pausar' : 'Iniciar'}
        </button>
        <button 
          onClick={resetTimer}
          className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          Reiniciar
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="workoutDuration" className="block text-gray-400 mb-1">Duración Ejercicio (seg):</label>
          <input 
            type="number" 
            id="workoutDuration" 
            value={workoutDuration} 
            onChange={(e) => setWorkoutDuration(parseInt(e.target.value) || 0)} 
            className="w-full px-3 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        <div>
          <label htmlFor="restDuration" className="block text-gray-400 mb-1">Duración Descanso (seg):</label>
          <input 
            type="number" 
            id="restDuration" 
            value={restDuration} 
            onChange={(e) => setRestDuration(parseInt(e.target.value) || 0)} 
            className="w-full px-3 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkoutTimer;