import React from 'react';
import { useCart } from '../../context/cart';
import { Button, CartItem, ContainerCart } from '../../styled-components/cart/cart';

const Cart: React.FC = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  
  return (
    <ContainerCart>
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        cart.map((vehicle) => (
          <CartItem key={vehicle.id}>
            <img src={vehicle.imageURL} alt={`${vehicle.brand} ${vehicle.model}`} />
            <div className="details">
              <p><span className="label">Marca:</span> <span className="value">{vehicle.brand}</span></p>
              <p><span className="label">Modelo:</span> <span className="value">{vehicle.model}</span></p>
              <p><span className="label">Precio:</span> <span className="value">${vehicle.price}</span></p>
              <Button onClick={() => removeFromCart(vehicle.id!)}>Eliminar</Button>
            </div>
          </CartItem>
        ))
      )}
      <Button onClick={clearCart}>Vaciar Carrito</Button>
    </ContainerCart>
  );
};


export default Cart;
