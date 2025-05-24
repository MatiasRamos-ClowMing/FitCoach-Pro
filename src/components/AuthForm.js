import React, { useState } from 'react';

const AuthForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Por favor ingresa email y contraseña');
      return;
    }
    onLogin({ email, password });
  };

  return (
    <div className="max-w-md mx-auto bg-gray-800 text-white p-8 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-yellow-400">Iniciar Sesión</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-400 mb-2">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="tu@email.com"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-400 mb-2">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors"
        >
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default AuthForm;