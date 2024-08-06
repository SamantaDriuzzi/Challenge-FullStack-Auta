// auth.tsx
import React, { createContext, useState, useEffect, useContext } from 'react';
import { auth, db } from '../firebase.config';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { doc, getDoc, updateDoc, } from 'firebase/firestore';

interface AuthContextType {
  user: FirebaseUser | null;
  loading: boolean;
  isAdmin: boolean;
  toggleFavorite: (vehicleId: string) => void;
  favorites: string[];
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setIsAdmin(userData.isAdmin || false);
          setFavorites(userData.favorites || []);
        } else {
          setIsAdmin(false);
        }
      } else {
        setIsAdmin(false);
        setFavorites([]);
      }
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const toggleFavorite = async (vehicleId: string) => {
    if (!user) return;
  
    const userRef = doc(db, 'users', user.uid);
    const userDoc = await getDoc(userRef);
  
    if (userDoc.exists()) {
      const userData = userDoc.data();
      let updatedFavorites: string[] = [];
  
      console.log('User data:', userData);
  
      if (userData.favorites) {
        updatedFavorites = userData.favorites
          .filter((id: string) => id)
          .includes(vehicleId)
          ? userData.favorites.filter((id: string) => id !== vehicleId)
          : [...userData.favorites, vehicleId];
      } else {
        updatedFavorites = [vehicleId]; 
      }
  
      try {
        await updateDoc(userRef, { favorites: updatedFavorites });
        setFavorites(updatedFavorites);
      } catch (error) {
        console.error('Error updating document:', error);
      }
    } else {
      console.error('User document does not exist');
    }
  };
  
  
  

  return (
    <AuthContext.Provider value={{ user, loading, isAdmin, toggleFavorite, favorites }}>
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
