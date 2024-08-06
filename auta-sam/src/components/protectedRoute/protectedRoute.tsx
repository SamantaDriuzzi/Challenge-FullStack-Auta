import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';

interface ProtectedRouteProps {
  element: React.ReactNode;
  admin?: boolean; // Indica si la ruta requiere permisos de administrador
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, admin = false }) => {
  const { user, loading, isAdmin } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Muestra un spinner o mensaje de carga
  }

  console.log("ProtectedRoute - usuario autenticado:", user);
  console.log("ProtectedRoute - es administrador:", isAdmin);

  if (!user || (admin && !isAdmin)) {
    console.log("Redirigiendo a /Ingresar");
    return <Navigate to="/Ingresar" replace />;
  }

  return <>{element}</>;
};


export default ProtectedRoute;
