//Context provider created to be referenced later by children components 

import React, { useState, useEffect } from 'react';
import { Context } from './CartContext';
function CartContextProvider({ children }) {
  
    const [total_price, set_total_price] = useState(0);
    // Cart data retrieved from local storage 
    const [cart, setCart] = useState(() => {
        
        const prevcartdata = localStorage.getItem("cart");
        return prevcartdata ? JSON.parse(prevcartdata) : [];
  });

    // Cart data set in local storage upon cart state change 
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

    // 🔹 Add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        // increase quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // add new item
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // 🔹 Remove product from cart
  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // 🔹 Change quantity (+1 or -1)
  const changeQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // 🔹 Auto-update total price
  useEffect(() => {
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    set_total_price(total);
  }, [cart]);

  return (
    <Context.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        changeQuantity,
        total_price,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default CartContextProvider;
