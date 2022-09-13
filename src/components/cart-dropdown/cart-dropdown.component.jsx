import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; 

import { selectCartItems } from '../../store/cart/cart.selector';
import { CardDropdownContainer, CartItems, EmptyMessage} from './cart-dropdown.style';

import Button from '../button/button.component';

import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigation = useNavigate();
  
  const goToCheckOut = () => {
    navigation('/checkout')
  }

  return (
    <CardDropdownContainer>
      <CartItems>
        {
          cartItems.length ? (
            cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />))
            ) : (
              <EmptyMessage>Your cart is empty</EmptyMessage>
            )}
      </CartItems>
      <Button onClick={goToCheckOut}>GO TO CHECKOUT</Button>
    </CardDropdownContainer>
  );
};

export default CartDropdown;