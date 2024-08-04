import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { VehicleData } from '../interfaces/Ivehicles';

interface CartContextType {
  cart: VehicleData[];
  addToCart: (vehicle: VehicleData) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<VehicleData[]>(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (vehicle: VehicleData) => {
    setCart((prevCart) => [...prevCart, vehicle]);
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((vehicle) => vehicle.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
