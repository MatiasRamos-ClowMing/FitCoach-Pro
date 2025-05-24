import React, { useState } from 'react';
import { addUser, verifyUser } from '../mock/users';

const RegisterForm = ({ onRegisterSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);
  const [verificationCode, setVerificationCode] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nombre completo es requerido';
    }
    
    if (!formData.email.includes('@')) {
      newErrors.email = 'Email inválido';
    }
    
    if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (step === 1) {
      if (!validateForm()) return;
      
      try {
        // Enviar código de verificación (simulado)
        const code = "123456"; // En producción, generar y enviar por email
        console.log(`Código de verificación para ${formData.email}: ${code}`);
        
        await addUser({
          name: formData.name,
          email: formData.email,
          password: formData.password
        });
        
        setStep(2);
      } catch (error) {
        setErrors({ general: error.message });
      }
    } else {
      try {
        const verified = await verifyUser(formData.email, verificationCode);
        if (verified) {
          onRegisterSuccess();
        } else {
          setErrors({ verification: 'Código incorrecto' });
        }
      } catch (error) {
        setErrors({ general: error.message });
      }
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-800 text-white p-8 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-yellow-400">
        {step === 1 ? 'Crear Cuenta' : 'Verificar Email'}
      </h2>
      
      {errors.general && (
        <div className="bg-red-700 text-red-200 p-3 rounded-lg mb-4">
          {errors.general}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        {step === 1 ? (
          <>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-400 mb-2">Nombre Completo:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-700'} bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-400 mb-2">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-700'} bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-400 mb-2">Contraseña:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-700'} bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400`}
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>
            
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-gray-400 mb-2">Confirmar Contraseña:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-700'} bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400`}
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
            </div>
          </>
        ) : (
          <>
            <div className="mb-6 text-center">
              <p className="text-gray-400 mb-4">
                Hemos enviado un código de verificación a <span className="font-semibold text-white">{formData.email}</span>
              </p>
              <div className="mb-4">
                <label htmlFor="verificationCode" className="block text-gray-400 mb-2">Código de Verificación:</label>
                <input
                  type="text"
                  id="verificationCode"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  className={`w-full px-4 py-2 border ${errors.verification ? 'border-red-500' : 'border-gray-700'} bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-center text-xl tracking-widest`}
                  maxLength="6"
                  placeholder="123456"
                />
                {errors.verification && <p className="text-red-500 text-sm mt-1">{errors.verification}</p>}
              </div>
            </div>
          </>
        )}
        
        <button
          type="submit"
          className="w-full py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors"
        >
          {step === 1 ? 'Registrarse' : 'Verificar Cuenta'}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;