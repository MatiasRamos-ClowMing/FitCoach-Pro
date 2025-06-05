import React, { useState, useEffect, createContext } from 'react';
import { getUsers } from '../mock/users';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('fitcoach_user');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (credentials) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const allUsers = getUsers();
        const user = allUsers.find(
          u => u.email === credentials.email && u.password === credentials.password && u.verified
        );
        
        if (user) {
          const userData = { ...user };
          delete userData.password;
          localStorage.setItem('fitcoach_user', JSON.stringify(userData));
          setCurrentUser(userData);
          resolve(userData);
        } else {
          reject(new Error('Credenciales incorrectas o cuenta no verificada'));
        }
      }, 500);
    });
  };

  const logout = () => {
    localStorage.removeItem('fitcoach_user');
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

// DONE