import React, { useState } from 'react';

const MeasurementInput = ({ onSave }) => {
  const [measurements, setMeasurements] = useState({
    weight: '',
    waist: '',
    chest: '',
    arms: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeasurements(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(measurements);
    setMeasurements({ weight: '', waist: '', chest: '', arms: '' });
  };

  return (
    <div className="bg-gray-800 text-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-bold mb-4 text-yellow-400">Registrar Medidas</h3>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="weight" className="block text-gray-400 mb-1">Peso (kg):</label>
            <input type="number" id="weight" name="weight" value={measurements.weight} onChange={handleChange} className="w-full px-3 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          </div>
          <div>
            <label htmlFor="waist" className="block text-gray-400 mb-1">Cintura (cm):</label>
            <input type="number" id="waist" name="waist" value={measurements.waist} onChange={handleChange} className="w-full px-3 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          </div>
          <div>
            <label htmlFor="chest" className="block text-gray-400 mb-1">Pecho (cm):</label>
            <input type="number" id="chest" name="chest" value={measurements.chest} onChange={handleChange} className="w-full px-3 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          </div>
          <div>
            <label htmlFor="arms" className="block text-gray-400 mb-1">Brazos (cm):</label>
            <input type="number" id="arms" name="arms" value={measurements.arms} onChange={handleChange} className="w-full px-3 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          </div>
        </div>
        <button type="submit" className="w-full py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors">
          Guardar Medidas
        </button>
      </form>
    </div>
  );
};

export default MeasurementInput;