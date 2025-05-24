import React from 'react';

const ButtonShowcase = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Botones Creados</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Botones de CoachHeader */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">CoachHeader Buttons</h3>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors">
              Clientes
            </button>
            <button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors">
              Rutinas
            </button>
          </div>
        </div>

        {/* Botones de ClientsList (Tabs) */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">ClientsList Tabs</h3>
          <div className="flex space-x-2">
            <button className="px-4 py-2 rounded-lg bg-black text-white">
              Todos
            </button>
            <button className="px-4 py-2 rounded-lg bg-gray-200">
              Masa Muscular
            </button>
          </div>
        </div>

        {/* Botones de WorkoutsList (Tabs) */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">WorkoutsList Tabs</h3>
          <div className="flex space-x-2">
            <button className="px-4 py-2 rounded-lg bg-black text-white">
              Todas
            </button>
            <button className="px-4 py-2 rounded-lg bg-gray-200">
              Principiante
            </button>
          </div>
        </div>

        {/* Botones de ExerciseSystem (Tabs) */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">ExerciseSystem Tabs</h3>
          <div className="flex space-x-2">
            <button className="px-4 py-2 rounded-lg bg-black text-white">
              Tipos
            </button>
            <button className="px-4 py-2 rounded-lg bg-gray-200">
              Músculos
            </button>
          </div>
        </div>

        {/* Botones de CommunitySection (Tabs) */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">CommunitySection Tabs</h3>
          <div className="flex space-x-2 overflow-x-auto pb-2">
            <button className="px-4 py-2 rounded-lg whitespace-nowrap bg-black text-white">
              Suscripciones
            </button>
            <button className="px-4 py-2 rounded-lg whitespace-nowrap bg-gray-200">
              Blog
            </button>
          </div>
        </div>

        {/* Botón de Enviar Mensaje (Chat) */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">Chat Send Button</h3>
          <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
            Enviar
          </button>
        </div>

        {/* Botones de NutritionSection (Tabs) */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">NutritionSection Tabs</h3>
          <div className="flex space-x-2 overflow-x-auto pb-2">
            <button className="px-4 py-2 rounded-lg whitespace-nowrap bg-black text-white">
              Videos
            </button>
            <button className="px-4 py-2 rounded-lg whitespace-nowrap bg-gray-200">
              Nutrición
            </button>
          </div>
        </div>

        {/* Botón de Añadir Producto (Shop) */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">Shop Add Button</h3>
          <button className="px-3 py-1 bg-black text-white text-sm rounded-lg hover:bg-gray-800 transition-colors">
            Añadir
          </button>
        </div>

        {/* Botones de ProductFilter (Shop) */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">ProductFilter Buttons</h3>
          <div className="flex space-x-2 overflow-x-auto pb-2">
            <button className="px-4 py-2 rounded-lg whitespace-nowrap bg-black text-white">
              Todos
            </button>
            <button className="px-4 py-2 rounded-lg whitespace-nowrap bg-gray-200">
              Calzado
            </button>
          </div>
        </div>

        {/* Botones de App (Navegación Principal) */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">App Navigation Buttons</h3>
          <div className="flex space-x-2 overflow-x-auto pb-2">
            <button className="px-4 py-2 rounded-lg whitespace-nowrap bg-black text-white">
              Clientes
            </button>
            <button className="px-4 py-2 rounded-lg whitespace-nowrap bg-gray-200">
              Rutinas
            </button>
          </div>
        </div>

        {/* Botón de Enviar Reseña */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">Review Form Button</h3>
          <button className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            Enviar Reseña
          </button>
        </div>

        {/* Botón de Iniciar Sesión (AuthForm) */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">AuthForm Button</h3>
          <button className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            Ingresar
          </button>
        </div>

        {/* Botón de Registrarse (RegisterForm) */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">RegisterForm Button</h3>
          <button className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            Registrarse
          </button>
        </div>

        {/* Botón de Verificar Cuenta (RegisterForm) */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">Verify Account Button</h3>
          <button className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            Verificar Cuenta
          </button>
        </div>

        {/* Botón de Iniciar Sesión (Después de Registro) */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">Login After Register Button</h3>
          <button className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            Iniciar Sesión
          </button>
        </div>

        {/* Botón de "No tienes cuenta? Regístrate aquí" */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">Register Link Button</h3>
          <button className="text-blue-600 hover:text-blue-800 font-medium">
            ¿No tienes cuenta? Regístrate aquí
          </button>
        </div>
      </div>
    </div>
  );
};

export default ButtonShowcase;