import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const ProtectedRoute = ({ children, roles }) => {
  const { currentUser, loading } = useContext(AuthContext);

  if (loading) {
    return <div className="text-center py-8">Cargando...</div>;
  }

  if (!currentUser) {
    return <div className="text-center py-8">Por favor inicia sesión</div>;
  }

  if (roles && !roles.includes(currentUser.role)) {
    return <div className="text-center py-8">No tienes permisos para acceder</div>;
  }

  return children;
};

export default ProtectedRoute;

// DONE