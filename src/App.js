import React, { useState } from 'react';
import AuthProvider, { AuthContext } from './components/AuthProvider';
import AuthForm from './components/AuthForm';
import RegisterForm from './components/RegisterForm';
import CoachHeader from './components/CoachHeader';
import ClientsList from './components/ClientsList';
import WorkoutsList from './components/WorkoutsList';
import ExerciseSystem from './components/ExerciseSystem';
import CommunitySection from './components/CommunitySection';
import NutritionSection from './components/NutritionSection';
import FitShopSection from './components/FitShopSection';
import SpecialDaysCalendar from './components/SpecialDaysCalendar';
import ReviewsSection from './components/ReviewsSection';
import ProgressSection from './components/ProgressSection';
import WhatsAppChat from './components/WhatsAppChat';
import UserManagement from './components/UserManagement';
import StepCounter from './components/StepCounter';
import WorkoutTimer from './components/WorkoutTimer';
import CalorieCalculator from './components/CalorieCalculator'; // Importar CalorieCalculator
import { useContext } from 'react';

const AppContent = () => {
  const [currentView, setCurrentView] = useState('clients');
  const [isChatVisible, setIsChatVisible] = useState(false);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <CoachHeader />
      <div className="flex space-x-4 p-6 overflow-x-auto pb-2">
        <button 
          onClick={() => setCurrentView('clients')}
          className={`px-4 py-2 rounded-lg whitespace-nowrap ${currentView === 'clients' ? 'bg-yellow-400 text-black' : 'bg-gray-700 text-white'}`}
        >
          Clientes
        </button>
        <button 
          onClick={() => setCurrentView('workouts')}
          className={`px-4 py-2 rounded-lg whitespace-nowrap ${currentView === 'workouts' ? 'bg-yellow-400 text-black' : 'bg-gray-700 text-white'}`}
        >
          Rutinas
        </button>
        <button 
          onClick={() => setCurrentView('exercises')}
          className={`px-4 py-2 rounded-lg whitespace-nowrap ${currentView === 'exercises' ? 'bg-yellow-400 text-black' : 'bg-gray-700 text-white'}`}
        >
          Ejercicios
        </button>
        <button 
          onClick={() => setCurrentView('community')}
          className={`px-4 py-2 rounded-lg whitespace-nowrap ${currentView === 'community' ? 'bg-yellow-400 text-black' : 'bg-gray-700 text-white'}`}
        >
          Comunidad
        </button>
        <button 
          onClick={() => setCurrentView('nutrition')}
          className={`px-4 py-2 rounded-lg whitespace-nowrap ${currentView === 'nutrition' ? 'bg-yellow-400 text-black' : 'bg-gray-700 text-white'}`}
        >
          Nutrición
        </button>
        <button 
          onClick={() => setCurrentView('shop')}
          className={`px-4 py-2 rounded-lg whitespace-nowrap ${currentView === 'shop' ? 'bg-yellow-400 text-black' : 'bg-gray-700 text-white'}`}
        >
          Tienda
        </button>
        <button 
          onClick={() => setCurrentView('specialDays')}
          className={`px-4 py-2 rounded-lg whitespace-nowrap ${currentView === 'specialDays' ? 'bg-yellow-400 text-black' : 'bg-gray-700 text-white'}`}
        >
          Días Especiales
        </button>
        <button 
          onClick={() => setCurrentView('reviews')}
          className={`px-4 py-2 rounded-lg whitespace-nowrap ${currentView === 'reviews' ? 'bg-yellow-400 text-black' : 'bg-gray-700 text-white'}`}
        >
          Reseñas
        </button>
         <button 
          onClick={() => setCurrentView('progress')}
          className={`px-4 py-2 rounded-lg whitespace-nowrap ${currentView === 'progress' ? 'bg-yellow-400 text-black' : 'bg-gray-700 text-white'}`}
        >
          Progreso
        </button>
         <button 
          onClick={() => setCurrentView('trackers')}
          className={`px-4 py-2 rounded-lg whitespace-nowrap ${currentView === 'trackers' ? 'bg-yellow-400 text-black' : 'bg-gray-700 text-white'}`}
        >
          Trackers
        </button>
         <button 
          onClick={() => setCurrentView('tools')} // Nuevo botón para herramientas
          className={`px-4 py-2 rounded-lg whitespace-nowrap ${currentView === 'tools' ? 'bg-yellow-400 text-black' : 'bg-gray-700 text-white'}`}
        >
          Herramientas
        </button>
         {currentUser?.role === 'admin' && (
           <button 
            onClick={() => setCurrentView('userManagement')}
            className={`px-4 py-2 rounded-lg whitespace-nowrap ${currentView === 'userManagement' ? 'bg-yellow-400 text-black' : 'bg-gray-700 text-white'}`}
          >
            Gestión Usuarios
          </button>
         )}
         <button 
          onClick={() => setIsChatVisible(!isChatVisible)}
          className={`px-4 py-2 rounded-lg whitespace-nowrap ${isChatVisible ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}
        >
          {isChatVisible ? 'Ocultar Chat' : 'Mostrar Chat'}
        </button>
      </div>
      
      {currentView === 'clients' && <ClientsList />}
      {currentView === 'workouts' && <WorkoutsList />}
      {currentView === 'exercises' && <ExerciseSystem />}
      {currentView === 'community' && <CommunitySection />}
      {currentView === 'nutrition' && <NutritionSection />}
      {currentView === 'shop' && <FitShopSection />}
      {currentView === 'specialDays' && <SpecialDaysCalendar />}
      {currentView === 'reviews' && <ReviewsSection />}
      {currentView === 'progress' && <ProgressSection />}
      {currentView === 'trackers' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <StepCounter />
          <WorkoutTimer />
        </div>
      )}
      {currentView === 'tools' && ( // Renderizar la calculadora de calorías
        <div className="p-6">
          <CalorieCalculator />
        </div>
      )}
      {currentView === 'userManagement' && currentUser?.role === 'admin' && <UserManagement />}

      <WhatsAppChat isVisible={isChatVisible} onClose={() => setIsChatVisible(false)} />
    </div>
  );
};

const App = () => {
  const { currentUser, login } = useContext(AuthContext);
  const [showRegister, setShowRegister] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);

  if (registerSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="bg-gray-800 p-8 rounded-xl shadow-md text-center max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">¡Registro Completado!</h2>
          <p className="mb-6 text-gray-400">Tu cuenta ha sido verificada correctamente. Ahora puedes iniciar sesión.</p>
          <button
            onClick={() => {
              setRegisterSuccess(false);
              setShowRegister(false);
            }}
            className="w-full py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors"
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
    );
  }

  if (!currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        {showRegister ? (
          <RegisterForm onRegisterSuccess={() => setRegisterSuccess(true)} />
        ) : (
          <div className="max-w-md w-full">
            <AuthForm onLogin={login} />
            <div className="mt-4 text-center">
              <button
                onClick={() => setShowRegister(true)}
                className="text-blue-400 hover:text-blue-500 font-medium"
              >
                ¿No tienes cuenta? Regístrate aquí
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return <AppContent />;
};

const AppWrapper = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

export default AppWrapper;

// DONE