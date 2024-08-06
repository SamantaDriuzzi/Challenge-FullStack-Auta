import React, { createContext, useState, useEffect, useContext } from 'react';
import { auth, db } from '../firebase.config'; 
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth'; // Importa User de Firebase
import { doc, getDoc } from 'firebase/firestore'; 

interface AuthContextType {
  user: FirebaseUser | null;
  loading: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        console.log("Usuario autenticado:", currentUser.email);
        const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          console.log("Datos del usuario desde Firestore:", userData);
          setIsAdmin(userData.isAdmin || false);
          console.log("Es administrador:", userData.isAdmin);
        } else {
          setIsAdmin(false);
        }
      } else {
        setIsAdmin(false);
      }
      setUser(currentUser); // Actualiza el estado del usuario después de obtener isAdmin
      setLoading(false);
    });
  
    return () => unsubscribe();
  }, []);
  

  return (
    <AuthContext.Provider value={{ user, loading, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
