import React, { useContext } from "react";

import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartcntx = useContext(CartContext);

  const addItemHandler = (id) => {
    cartcntx.addItem({ id, quantity: 1 });
  };
  const removeItemHandler = (id) => {
    cartcntx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartcntx.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          onAdd={() => addItemHandler(item.id)}
          onRemove={() => removeItemHandler(item.id)}
        />
      ))}
    </ul>
  );

  let totalAmount = 0;
  cartcntx.items.forEach((item) => {
    totalAmount += item.quantity * item.price;
  });
  return (
    <Modal onCls={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <div>Total Amount</div>
        <div>${totalAmount.toFixed(2)}</div>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-cls"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );

  //or
  // return React.createElement(
  //   Modal,
  //   { onCls: props.onClose },
  //   cartItems,
  //   React.createElement(
  //     "div",
  //     { className: classes.total },
  //     React.createElement("div", {}, "Total Amount"),
  //     React.createElement("div", {}, `$${totalAmount.toFixed(2)}`)
  //     // React.createElement("div", {}, 35.26)
  //   ),
  //   React.createElement(
  //     "div",
  //     { className: classes.actions },
  //     React.createElement(
  //       "button",
  //       { className: classes["button-cls"], onClick: props.onClose },
  //       "Close"
  //     ),
  //     React.createElement("button", { className: classes.button }, "Order")
  //   )
  // );
};

export default Cart;
