import React from 'react';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';
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
    Swal.fire({
      icon: 'error',
      title: 'Acceso denegado',
      text: 'No tienes permisos para acceder a esta ruta.',
      confirmButtonText: 'Aceptar'
    })
    console.log("Redirigiendo a /Ingresar");
    return <Navigate to="/Ingresar" replace />;
  }

  return <>{element}</>;
};


export default ProtectedRoute;
