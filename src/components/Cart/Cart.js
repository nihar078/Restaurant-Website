import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = () => {
  const cartItem = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Suchi", amount: 2, price: 12.99 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  // return (
  //     <Modal>
  //         {cartItem}
  //         <div className={classes.total}>
  //            <div>Total Amount</div>
  //            <div>35.62</div>
  //         </div>
  //         <div className={classes.actions}>
  //             <button className={classes['button-cls']}>Close</button>
  //             <button className={classes.button}>Order</button>
  //         </div>
  //     </Modal>
  // )

  //or
  return React.createElement(
    Modal,
    {},
    cartItem,
    React.createElement(
      "div",
      { className: classes.total },
      React.createElement("div", {}, "Total Amount"),
      React.createElement("div", {}, 35.26)
    ),
    React.createElement(
      "div",
      { className: classes.actions },
      React.createElement(
        "button",
        { className: classes["button-cls"] },
        "Close"
      ),
      React.createElement("button", { className: classes.button }, "Order")
    )
  );
};

export default Cart;
