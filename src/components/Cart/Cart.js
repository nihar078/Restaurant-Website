import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartcntx = useContext(CartContext);
  const cartItem = (
    <ul className={classes["cart-items"]}>
      {cartcntx.items.map((item) => (
        <li>
          Name: {item.name} Price: {item.price} Quantity: {item.quantity}
        </li>
      ))}
    </ul>
  );
  return (
    <Modal onCls={props.onClose}>
      {cartItem}
      <div className={classes.total}>
        <div>Total Amount</div>
        <div>35.62</div>
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
  //   return React.createElement(
  //     Modal,
  //     { onCls: props.onClose },
  //     cartItem,
  //     React.createElement(
  //       "div",
  //       { className: classes.total },
  //       React.createElement("div", {}, "Total Amount"),
  //       React.createElement("div", {}, 35.26)
  //     ),
  //     React.createElement(
  //       "div",
  //       { className: classes.actions },
  //       React.createElement(
  //         "button",
  //         { className: classes["button-cls"], onClick: props.onClose },
  //         "Close"
  //       ),
  //       React.createElement("button", { className: classes.button }, "Order")
  //     )
  //   );
};

export default Cart;
