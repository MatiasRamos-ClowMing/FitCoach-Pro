import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider'; // Importar AuthContext

const CoachHeader = () => {
  const { logout } = useContext(AuthContext); // Usar useContext para acceder a logout

  return (
    <header className="bg-gray-900 text-white p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-400">FitCoach Pro</h1>
        <div className="flex items-center space-x-4"> {/* Contenedor para logo y botón */}
          <img 
            src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0c6fB7t2xLlIki8fCRNnvUyWdBhcZQKOVp6M0" 
            alt="Logo de FitCoach Pro"
            className="h-10 w-auto" // Ajusta el tamaño según necesites
          />
          <button 
            onClick={logout} // Llamar a la función logout al hacer clic
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </header>
  );
};

export default CoachHeader;

// DONE