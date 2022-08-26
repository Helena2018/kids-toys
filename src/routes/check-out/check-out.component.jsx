import './check-out.style.scss';
import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

const CheckOut = () => {
  const { cartItems, addItemToCart } = useContext(CartContext);

  return (
    <div>
      <h1>I am the check out page</h1>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
              <span>decrement</span>
              <span onClick={() => addItemToCart(cartItem)}>increment</span>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default CheckOut;