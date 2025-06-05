import React, { useState } from 'react';

const CalorieCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [calories, setCalories] = useState(null);

  const calculateBMR = () => {
    let bmr;
    if (gender === 'male') {
      bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
      bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }
    return bmr;
  };

  const calculateTDEE = () => {
    const bmr = calculateBMR();
    let tdee;
    switch (activityLevel) {
      case 'sedentary':
        tdee = bmr * 1.2;
        break;
      case 'light':
        tdee = bmr * 1.375;
        break;
      case 'moderate':
        tdee = bmr * 1.55;
        break;
      case 'active':
        tdee = bmr * 1.725;
        break;
      case 'very_active':
        tdee = bmr * 1.9;
        break;
      default:
        tdee = bmr * 1.2;
    }
    return Math.round(tdee);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (weight && height && age) {
      setCalories(calculateTDEE());
    } else {
      setCalories(null);
      alert('Por favor, rellena todos los campos.');
    }
  };

  return (
    <div className="bg-gray-800 text-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-bold mb-4 text-yellow-400">Calculadora de Calorías</h3>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="weight" className="block text-gray-400 mb-1">Peso (kg):</label>
            <input type="number" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} className="w-full px-3 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg" required />
          </div>
          <div>
            <label htmlFor="height" className="block text-gray-400 mb-1">Altura (cm):</label>
            <input type="number" id="height" value={height} onChange={(e) => setHeight(e.target.value)} className="w-full px-3 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg" required />
          </div>
          <div>
            <label htmlFor="age" className="block text-gray-400 mb-1">Edad:</label>
            <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} className="w-full px-3 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg" required />
          </div>
          <div>
            <label htmlFor="gender" className="block text-gray-400 mb-1">Género:</label>
            <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} className="w-full px-3 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg">
              <option value="male">Hombre</option>
              <option value="female">Mujer</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label htmlFor="activityLevel" className="block text-gray-400 mb-1">Nivel de Actividad:</label>
            <select id="activityLevel" value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)} className="w-full px-3 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg">
              <option value="sedentary">Sedentario (poco o ningún ejercicio)</option>
              <option value="light">Ligero (ejercicio 1-3 días/semana)</option>
              <option value="moderate">Moderado (ejercicio 3-5 días/semana)</option>
              <option value="active">Activo (ejercicio 6-7 días/semana)</option>
              <option value="very_active">Muy Activo (ejercicio intenso diario)</option>
            </select>
          </div>
        </div>
        <button type="submit" className="w-full py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors">
          Calcular Calorías
        </button>
      </form>

      {calories !== null && (
        <div className="mt-6 p-4 bg-gray-700 rounded-lg text-center">
          <p className="text-gray-400">Calorías diarias estimadas:</p>
          <p className="text-3xl font-bold text-yellow-400">{calories} kcal</p>
        </div>
      )}
    </div>
  );
};

export default CalorieCalculator;