import React, { useState } from 'react';
import { auth, googleProvider } from '../../firebase.config'; 
import { signInWithPopup } from 'firebase/auth';
import Swal from 'sweetalert2';
import { Button, ContainerRegister, LoadingSpinner, Instructions } from '../../styled-components/auth/auth';

const SignInWithGoogle = () => {
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);

      if (result.user) {
        Swal.fire({
          title: 'Éxito',
          text: 'Inicio de sesión exitoso',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
        setTimeout(() => {
          window.location.href = '/Autos';
        }, 2000);
      }
      console.log(result.user);
    } catch (error:any) {
      Swal.fire({
        title: 'Error',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContainerRegister>
      <Instructions>Inicia sesión con tu cuenta de Google para continuar.</Instructions>
      <Button onClick={handleSignIn} disabled={loading}>
        {loading ? <LoadingSpinner /> : 'Registrarse con Google'}
      </Button>
    </ContainerRegister>
  );
};

export default SignInWithGoogle;
