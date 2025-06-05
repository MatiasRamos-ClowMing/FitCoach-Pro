import React, { useState, useEffect, useContext } from 'react';
import { getUsers, addUser } from '../mock/users';
import { addHistoryEntry, getHistory } from '../mock/history';
import { AuthContext } from './AuthProvider';

const UserManagement = () => {
  const { currentUser } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'client', profilePhoto: '' });
  const [showAddForm, setShowAddForm] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setUsers(getUsers());
    setHistory(getHistory());
  }, []);

  const handleEditClick = (user) => {
    setEditingUser(user);
    setFormData({ ...user });
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
    setFormData({ name: '', email: '', password: '', role: 'client', profilePhoto: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, profilePhoto: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveUser = () => {
    if (editingUser) {
      const updatedUsers = users.map(user => user.id === editingUser.id ? { ...user, ...formData } : user);
      setUsers(updatedUsers);
      addHistoryEntry(currentUser.email, 'EDIT_USER', { userId: editingUser.id, changes: formData });
      setEditingUser(null);
    } else {
      try {
        const newUser = addUser({ ...formData, verified: true });
        setUsers([...users, newUser]);
        addHistoryEntry(currentUser.email, 'ADD_USER', { userId: newUser.id, email: newUser.email });
        setShowAddForm(false);
      } catch (error) {
        alert(error.message);
      }
    }
    setFormData({ name: '', email: '', password: '', role: 'client', profilePhoto: '' });
    setHistory(getHistory());
  };

  const handleDeleteUser = (userId) => {
    const deletedUser = users.find(user => user.id === userId);
    if (deletedUser) {
      setUsers(users.filter(user => user.id !== userId));
      addHistoryEntry(currentUser.email, 'DELETE_USER', { userId: userId, email: deletedUser.email });
      setHistory(getHistory());
    }
  };

  const canModify = ["pelaezedilson83@gmail.com", "lorenacoach.08@gmail.com"].includes(currentUser?.email);

  return (
    <div className="p-6 bg-gray-900 text-white">
      <h2 className="text-2xl font-bold mb-6 text-yellow-400">Gestión de Usuarios</h2>

      {canModify ? (
        <>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="mb-6 px-4 py-2 bg-green-500 text-black rounded-lg hover:bg-green-600 transition-colors"
          >
            {showAddForm ? 'Cancelar' : 'Agregar Nuevo Usuario'}
          </button>

          {showAddForm && (
            <div className="bg-gray-800 p-6 rounded-xl shadow-md mb-6 max-w-md mx-auto">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Agregar Usuario</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-400 mb-1">Nombre:</label>
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg" />
                </div>
                <div>
                  <label className="block text-gray-400 mb-1">Email:</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg" />
                </div>
                <div>
                  <label className="block text-gray-400 mb-1">Contraseña:</label>
                  <input type="password" name="password" value={formData.password} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg" />
                </div>
                 <div>
                  <label className="block text-gray-400 mb-1">Rol:</label>
                  <select name="role" value={formData.role} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg">
                    <option value="client">Cliente</option>
                    <option value="trainer">Entrenador</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                 <div>
                  <label className="block text-gray-400 mb-1">Foto de Perfil:</label>
                  <input type="file" accept="image/*" onChange={handleFileChange} className="w-full text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-yellow-400 file:text-black hover:file:bg-yellow-500" />
                  {formData.profilePhoto && <img src={formData.profilePhoto} alt="Preview" className="mt-2 w-16 h-16 object-cover rounded-full" />}
                </div>
                <button onClick={handleSaveUser} className="w-full py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors">
                  Guardar Usuario
                </button>
              </div>
            </div>
          )}

          {editingUser && (
            <div className="bg-gray-800 p-6 rounded-xl shadow-md mb-6 max-w-md mx-auto">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Editar Usuario: {editingUser.name}</h3>
               <div className="space-y-4">
                <div>
                  <label className="block text-gray-400 mb-1">Nombre:</label>
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg" />
                </div>
                <div>
                  <label className="block text-gray-400 mb-1">Email:</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg" />
                </div>
                <div>
                  <label className="block text-gray-400 mb-1">Contraseña:</label>
                  <input type="password" name="password" value={formData.password} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg" />
                </div>
                 <div>
                  <label className="block text-gray-400 mb-1">Rol:</label>
                  <select name="role" value={formData.role} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-700 bg-gray-900 text-white rounded-lg">
                    <option value="client">Cliente</option>
                    <option value="trainer">Entrenador</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                 <div>
                  <label className="block text-gray-400 mb-1">Foto de Perfil:</label>
                  <input type="file" accept="image/*" onChange={handleFileChange} className="w-full text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-yellow-400 file:text-black hover:file:bg-yellow-500" />
                  {formData.profilePhoto && <img src={formData.profilePhoto} alt="Preview" className="mt-2 w-16 h-16 object-cover rounded-full" />}
                </div>
                <div className="flex space-x-4">
                  <button onClick={handleSaveUser} className="flex-1 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors">
                    Guardar Cambios
                  </button>
                  <button onClick={handleCancelEdit} className="flex-1 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Lista de Usuarios</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Foto</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Nombre</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Rol</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Acciones</th>
                  </tr>
                </thead>
                <tbody className="bg-gray-800 divide-y divide-gray-700">
                  {users.map(user => (
                    <tr key={user.id}>
                       <td className="px-6 py-4 whitespace-nowrap">
                        <img src={user.profilePhoto || 'https://via.placeholder.com/50?text=No+Foto'} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{user.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{user.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400 capitalize">{user.role}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button onClick={() => handleEditClick(user)} className="text-yellow-400 hover:text-yellow-500 mr-4">Editar</button>
                        <button onClick={() => handleDeleteUser(user.id)} className="text-red-500 hover:text-red-600">Eliminar</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-md mt-6">
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Historial de Cambios</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Timestamp</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Usuario</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Acción</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Detalles</th>
                  </tr>
                </thead>
                <tbody className="bg-gray-800 divide-y divide-gray-700">
                  {history.map((entry, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{new Date(entry.timestamp).toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{entry.userEmail}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{entry.action}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{JSON.stringify(entry.details)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center py-8 bg-gray-800 rounded-lg">
          <p className="text-red-500">No tienes permisos para gestionar usuarios.</p>
        </div>
      )}
    </div>
  );
};

export default UserManagement;

// DONE