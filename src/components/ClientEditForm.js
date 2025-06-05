import React, { useState } from 'react';

const ClientEditForm = ({ client, onSave, onCancel }) => {
  const [formData, setFormData] = useState({ ...client });
  const [newMedicalCondition, setNewMedicalCondition] = useState({ condition: '', severity: 'Leve', restrictions: '' });
  const [newMuscleLesson, setNewMuscleLesson] = useState('');
  const [newTargetProblem, setNewTargetProblem] = useState('');
  const [newPaymentMethod, setNewPaymentMethod] = useState({ type: '', details: '', primary: false });
  const [newStretchingExercise, setNewStretchingExercise] = useState({ name: '', duration: '', difficulty: 'Principiante', area: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEmergencyContactChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      emergencyContact: {
        ...prev.emergencyContact,
        [name]: value
      }
    }));
  };

  const handleAddMedicalCondition = () => {
    if (newMedicalCondition.condition.trim()) {
      setFormData(prev => ({
        ...prev,
        medicalInfo: [...(prev.medicalInfo || []), newMedicalCondition]
      }));
      setNewMedicalCondition({ condition: '', severity: 'Leve', restrictions: '' });
    }
  };

  const handleRemoveMedicalCondition = (index) => {
    setFormData(prev => ({
      ...prev,
      medicalInfo: prev.medicalInfo.filter((_, i) => i !== index)
    }));
  };

  const handleAddMuscleLesson = () => {
    if (newMuscleLesson.trim()) {
      setFormData(prev => ({
        ...prev,
        muscleLessons: [...(prev.muscleLessons || []), newMuscleLesson]
      }));
      setNewMuscleLesson('');
    }
  };

  const handleRemoveMuscleLesson = (index) => {
    setFormData(prev => ({
      ...prev,
      muscleLessons: prev.muscleLessons.filter((_, i) => i !== index)
    }));
  };

  const handleAddTargetProblem = () => {
    if (newTargetProblem.trim()) {
      setFormData(prev => ({
        ...prev,
        targetProblems: [...(prev.targetProblems || []), newTargetProblem]
      }));
      setNewTargetProblem('');
    }
  };

  const handleRemoveTargetProblem = (index) => {
    setFormData(prev => ({
      ...prev,
      targetProblems: prev.targetProblems.filter((_, i) => i !== index)
    }));
  };

  const handleAddPaymentMethod = () => {
    if (newPaymentMethod.type.trim() && newPaymentMethod.details.trim()) {
      setFormData(prev => ({
        ...prev,
        paymentMethods: [...(prev.paymentMethods || []), newPaymentMethod]
      }));
      setNewPaymentMethod({ type: '', details: '', primary: false });
    }
  };

  const handleRemovePaymentMethod = (index) => {
    setFormData(prev => ({
      ...prev,
      paymentMethods: prev.paymentMethods.filter((_, i) => i !== index)
    }));
  };

  const handleAddStretchingExercise = () => {
    if (newStretchingExercise.name.trim()) {
      setFormData(prev => ({
        ...prev,
        stretchingExercises: [...(prev.stretchingExercises || []), newStretchingExercise]
      }));
      setNewStretchingExercise({ name: '', duration: '', difficulty: 'Principiante', area: '' });
    }
  };

  const handleRemoveStretchingExercise = (index) => {
    setFormData(prev => ({
      ...prev,
      stretchingExercises: prev.stretchingExercises.filter((_, i) => i !== index)
    }));
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <div className="p-6 bg-gray-900 text-white">
      <h2 className="text-2xl font-bold mb-6 text-yellow-400">Editar Cliente: {client.name}</h2>

      <div className="bg-gray-800 p-6 rounded-xl shadow-md mb-6 space-y-4">
        <h3 className="text-xl font-bold mb-4 text-yellow-400">Información Básica</h3>
        <div>
          <label className="block text-gray-400 mb-1">Nombre:</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg" />
        </div>
        <div>
          <label className="block text-gray-400 mb-1">Edad:</label>
          <input type="number" name="age" value={formData.age} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg" />
        </div>
        <div>
          <label className="block text-gray-400 mb-1">Peso (kg):</label>
          <input type="number" name="weight" value={formData.weight} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg" />
        </div>
        <div>
          <label className="block text-gray-400 mb-1">Altura (cm):</label>
          <input type="number" name="height" value={formData.height} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg" />
        </div>
        <div>
          <label className="block text-gray-400 mb-1">Objetivos:</label>
          <input type="text" name="goals" value={formData.goals} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg" />
        </div>
        <div>
          <label className="block text-gray-400 mb-1">Horario Preferido:</label>
          <input type="text" name="preferredHours" value={formData.preferredHours} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg" />
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-xl shadow-md mb-6 space-y-4">
        <h3 className="text-xl font-bold mb-4 text-yellow-400">Contacto de Emergencia</h3>
        <div>
          <label className="block text-gray-400 mb-1">Nombre:</label>
          <input type="text" name="name" value={formData.emergencyContact?.name || ''} onChange={handleEmergencyContactChange} className="w-full px-3 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg" />
        </div>
        <div>
          <label className="block text-gray-400 mb-1">Teléfono:</label>
          <input type="text" name="phone" value={formData.emergencyContact?.phone || ''} onChange={handleEmergencyContactChange} className="w-full px-3 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg" />
        </div>
        <div>
          <label className="block text-gray-400 mb-1">Relación:</label>
          <input type="text" name="relationship" value={formData.emergencyContact?.relationship || ''} onChange={handleEmergencyContactChange} className="w-full px-3 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg" />
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-xl shadow-md mb-6">
        <h3 className="text-xl font-bold mb-4 text-yellow-400">Información Médica</h3>
        <div className="space-y-3 mb-4">
          {(formData.medicalInfo || []).map((condition, index) => (
            <div key={index} className="flex justify-between items-center bg-gray-700 p-3 rounded-lg">
              <div>
                <p className="font-medium">{condition.condition}</p>
                <p className="text-sm text-gray-400">{condition.restrictions}</p>
              </div>
              <button onClick={() => handleRemoveMedicalCondition(index)} className="text-red-500 hover:text-red-600">Eliminar</button>
            </div>
          ))}
        </div>
        <div className="space-y-3">
          <div>
            <label className="block text-gray-400 mb-1">Condición:</label>
            <input type="text" value={newMedicalCondition.condition} onChange={(e) => setNewMedicalCondition({...newMedicalCondition, condition: e.target.value})} className="w-full px-3 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg" />
          </div>
          <div>
            <label className="block text-gray-400 mb-1">Severidad:</label>
            <select value={newMedicalCondition.severity} onChange={(e) => setNewMedicalCondition({...newMedicalCondition, severity: e.target.value})} className="w-full px-3 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg">
              <option value="Leve">Leve</option>
              <option value="Moderada">Moderada</option>
              <option value="Severa">Severa</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-400 mb-1">Restricciones:</label>
            <textarea value={newMedicalCondition.restrictions} onChange={(e) => setNewMedicalCondition({...newMedicalCondition, restrictions: e.target.value})} className="w-full px-3 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg" rows="2"></textarea>
          </div>
          <button onClick={handleAddMedicalCondition} className="w-full py-2 bg-green-500 text-black rounded-lg hover:bg-green-600 transition-colors">Agregar Condición</button>
        </div>
      </div>

       <div className="bg-gray-800 p-6 rounded-xl shadow-md mb-6">
        <h3 className="text-xl font-bold mb-4 text-yellow-400">Problemas a Tratar</h3>
        <div className="space-y-3 mb-4">
          {(formData.targetProblems || []).map((problem, index) => (
            <div key={index} className="flex justify-between items-center bg-gray-700 p-3 rounded-lg">
              <p className="font-medium">{problem}</p>
              <button onClick={() => handleRemoveTargetProblem(index)} className="text-red-500 hover:text-red-600">Eliminar</button>
            </div>
          ))}
        </div>
        <div className="space-y-3">
          <div>
            <label className="block text-gray-400 mb-1">Problema:</label>
            <input type="text" value={newTargetProblem} onChange={(e) => setNewTargetProblem(e.target.value)} className="w-full px-3 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg" />
          </div>
          <button onClick={handleAddTargetProblem} className="w-full py-2 bg-green-500 text-black rounded-lg hover:bg-green-600 transition-colors">Agregar Problema</button>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-xl shadow-md mb-6">
        <h3 className="text-xl font-bold mb-4 text-yellow-400">Lecciones Musculares</h3>
        <div className="space-y-3 mb-4">
          {(formData.muscleLessons || []).map((lesson, index) => (
            <div key={index} className="flex justify-between items-center bg-gray-700 p-3 rounded-lg">
              <p className="font-medium">{lesson}</p>
              <button onClick={() => handleRemoveMuscleLesson(index)} className="text-red-500 hover:text-red-600">Eliminar</button>
            </div>
          ))}
        </div>
        <div className="space-y-3">
          <div>
            <label className="block text-gray-400 mb-1">Lección:</label>
            <input type="text" value={newMuscleLesson} onChange={(e) => setNewMuscleLesson(e.target.value)} className="w-full px-3 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg" />
          </div>
          <button onClick={handleAddMuscleLesson} className="w-full py-2 bg-green-500 text-black rounded-lg hover:bg-green-600 transition-colors">Agregar Lección</button>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-xl shadow-md mb-6">
        <h3 className="text-xl font-bold mb-4 text-yellow-400">Métodos de Pago</h3>
        <div className="space-y-3 mb-4">
          {(formData.paymentMethods || []).map((method, index) => (
            <div key={index} className="flex justify-between items-center bg-gray-700 p-3 rounded-lg">
              <div>
                <p className="font-medium">{method.type}</p>
                <p className="text-sm text-gray-400">{method.details}</p>
              </div>
              <button onClick={() => handleRemovePaymentMethod(index)} className="text-red-500 hover:text-red-600">Eliminar</button>
            </div>
          ))}
        </div>
        <div className="space-y-3">
          <div>
            <label className="block text-gray-400 mb-1">Tipo:</label>
            <input type="text" value={newPaymentMethod.type} onChange={(e) => setNewPaymentMethod({...newPaymentMethod, type: e.target.value})} className="w-full px-3 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg" />
          </div>
          <div>
            <label className="block text-gray-400 mb-1">Detalles:</label>
            <input type="text" value={newPaymentMethod.details} onChange={(e) => setNewPaymentMethod({...newPaymentMethod, details: e.target.value})} className="w-full px-3 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg" />
          </div>
          <div className="flex items-center">
            <input type="checkbox" checked={newPaymentMethod.primary} onChange={(e) => setNewPaymentMethod({...newPaymentMethod, primary: e.target.checked})} className="mr-2" />
            <label className="text-gray-400">Principal</label>
          </div>
          <button onClick={handleAddPaymentMethod} className="w-full py-2 bg-green-500 text-black rounded-lg hover:bg-green-600 transition-colors">Agregar Método</button>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-xl shadow-md mb-6">
        <h3 className="text-xl font-bold mb-4 text-yellow-400">Ejercicios de Estiramiento Recomendados</h3>
        <div className="space-y-3 mb-4">
          {(formData.stretchingExercises || []).map((exercise, index) => (
            <div key={index} className="flex justify-between items-center bg-gray-700 p-3 rounded-lg">
              <div>
                <p className="font-medium">{exercise.name}</p>
                <p className="text-sm text-gray-400">{exercise.duration} - {exercise.area}</p>
              </div>
              <button onClick={() => handleRemoveStretchingExercise(index)} className="text-red-500 hover:text-red-600">Eliminar</button>
            </div>
          ))}
        </div>
        <div className="space-y-3">
          <div>
            <label className="block text-gray-400 mb-1">Nombre:</label>
            <input type="text" value={newStretchingExercise.name} onChange={(e) => setNewStretchingExercise({...newStretchingExercise, name: e.target.value})} className="w-full px-3 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg" />
          </div>
          <div>
            <label className="block text-gray-400 mb-1">Duración:</label>
            <input type="text" value={newStretchingExercise.duration} onChange={(e) => setNewStretchingExercise({...newStretchingExercise, duration: e.target.value})} className="w-full px-3 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg" />
          </div>
          <div>
            <label className="block text-gray-400 mb-1">Dificultad:</label>
            <select value={newStretchingExercise.difficulty} onChange={(e) => setNewStretchingExercise({...newStretchingExercise, difficulty: e.target.value})} className="w-full px-3 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg">
              <option value="Principiante">Principiante</option>
              <option value="Intermedio">Intermedio</option>
              <option value="Avanzado">Avanzado</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-400 mb-1">Área:</label>
            <input type="text" value={newStretchingExercise.area} onChange={(e) => setNewStretchingExercise({...newStretchingExercise, area: e.target.value})} className="w-full px-3 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg" />
          </div>
          <button onClick={handleAddStretchingExercise} className="w-full py-2 bg-green-500 text-black rounded-lg hover:bg-green-600 transition-colors">Agregar Ejercicio</button>
        </div>
      </div>


      <div className="flex space-x-4">
        <button onClick={handleSave} className="flex-1 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors">
          Guardar Cambios
        </button>
        <button onClick={onCancel} className="flex-1 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default ClientEditForm;