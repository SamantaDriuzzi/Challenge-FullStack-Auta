// src/utils/authUtils.ts

import { signOut } from 'firebase/auth';
import { auth } from '../firebase.config'; // Asegúrate de importar desde tu archivo firebase.config

export const handleSignOut = async () => {
  try {
    await signOut(auth);
    console.log('User signed out successfully');
  } catch (error) {
    console.error('Error signing out:', error);
  }
};
