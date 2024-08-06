import React, { useState } from 'react';
import { auth, db, googleProvider } from '../../firebase.config'; 
import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';
import Swal from 'sweetalert2';
import { Button, ContainerRegister, LoadingSpinner, Instructions } from '../../styled-components/auth/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const SignInWithGoogle = () => {
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      await handleUser(user);
    } catch (error) {
      console.error("Error signing in with Google:", error);
      Swal.fire("Error", "Hubo un problema al iniciar sesión con Google. Inténtalo de nuevo.", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleUser = async (user: User) => {
    const userDocRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userDocRef);

    if (!userDoc.exists()) {
      await setDoc(userDocRef, {
        email: user.email,
        name: user.displayName,
        isAdmin: false, 
      });
    } else {
      const isAdmin = userDoc.data()?.isAdmin;
      console.log(`Usuario ${isAdmin ? "es" : "no es"} administrador`);
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
