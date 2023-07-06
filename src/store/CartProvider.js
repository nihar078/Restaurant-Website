import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);
  // let items =[]
  const addItemToCartHandler = (item) => {
    // cartContext.items.push(item)
    updateItems([...items, item]);
    // console.log("inside addItemToHandler", cartContext);
  };

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    message: "Click here",
  };

  return (
    <CartContext.Provider value={cartContext}>
      {/* {console.log("Inside CartContext.Provider", cartContext)} */}
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
