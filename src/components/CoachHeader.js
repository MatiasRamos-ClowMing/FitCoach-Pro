import React from 'react';

const CoachHeader = () => {
  return (
    <header className="bg-gray-900 text-white p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-400">FitCoach Pro</h1>
        <img 
          src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0c6fB7t2xLlIki8fCRNnvUyWdBhcZQKOVp6M0" 
          alt="Logo de FitCoach Pro"
          className="h-10 w-auto" // Ajusta el tamaño según necesites
        />
      </div>
    </header>
  );
};

export default CoachHeader;

// DONE