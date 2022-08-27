import { createContext, useState, useEffect } from "react"

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if(existingCartItem) {
    return cartItems.map((cartItem) => 
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  // Find the cart item to remove 
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // Check if quantity is equal to 1, if it is remove that item from the cart
  if(existingCartItem.quantity === 1 ) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
  }
  
  // Return back cartitems with matching cart item with reduced quantity 
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemToCart: () => {},
  clearItemFromCart: () => {},
  cartTotal: 0,
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems])

  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 
      0
    );
    setCartTotal(newCartTotal);
  },[cartItems])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemToCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems,productToRemove))
  };

  const clearItemFromCart = (productToClear) => {
    setCartItems(clearCartItem(cartItems, productToClear))
  }

  const value = { 
    isCartOpen, 
    setIsCartOpen, 
    addItemToCart, 
    removeItemToCart,
    clearItemFromCart, 
    cartItems, 
    cartTotal,
    cartCount, 
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};