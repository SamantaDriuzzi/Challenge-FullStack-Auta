import React from 'react';
import { useCart } from '../../context/cart';
import { Button, CartItem, ContainerCart, ContainerCartItems, ContainerEmptyCart, CartItemsWrapper, CartSummaryWrapper, ContainerTitle } from '../../styled-components/cart/cart';
import axios from "axios";
import emptyCart from '../../assets/cart.svg';

const Cart: React.FC = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const createPreference = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/create_preference",
        cart
      );
      const { redirectUrl } = response.data;
      return redirectUrl;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const url = await createPreference();
    if (url) window.location.href = url;
  };

  const handleBack = () => {
    window.location.href = '/Autos';
  };
  console.log("ESTO ES CART: LISTA DE AUTOS",cart);
  
  const total = cart.reduce((total, vehicle) => total + (typeof vehicle.price === 'string' ? parseFloat(vehicle.price) : vehicle.price), 0);
  return (
    <ContainerCart>
      <ContainerTitle>TUS VEHICULOS A RESERVAR:</ContainerTitle>
      {cart.length === 0 ? (
        <ContainerEmptyCart>
          <img src={emptyCart} alt="Imagen de un usuario con un carrito indicando que no tiene productos" />
          <p>¡NADA POR AQUÍ!</p>
          <Button onClick={handleBack}>Ver autos</Button>
        </ContainerEmptyCart>
      ) : (
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
          <CartItemsWrapper>
            <ContainerCartItems>
              {cart.map((vehicle) => (
                <CartItem key={vehicle.id}>
                  <img src={vehicle.imageURL} alt={`${vehicle.brand} ${vehicle.model}`} />
                  <div className="details">
                    <p><span className="label">Marca:</span> <span className="value">{vehicle.brand}</span></p>
                    <p><span className="label">Modelo:</span> <span className="value">{vehicle.model}</span></p>
                    <p><span className="label">Precio:</span> <span className="value">${vehicle.price}</span></p>
                    {vehicle.id && (
                      <Button onClick={() => removeFromCart(vehicle.id!)}>Eliminar</Button>
                    )}
                  </div>
                </CartItem>
              ))}
            </ContainerCartItems>
          </CartItemsWrapper>
          <CartSummaryWrapper>
            <p>Total: ${total.toFixed(2)}</p>
            <Button onClick={clearCart}>Vaciar Carrito</Button>
            <Button onClick={handleBuy}>Reservar</Button>
          </CartSummaryWrapper>
        </div>
      )}
    </ContainerCart>
  );
};

export default Cart;
