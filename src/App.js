import React, { Fragment, useState } from "react";
import Header from "./components/Header/Header";
import Meals from "./components/Layout/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown]= useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }
  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart = {showCartHandler}/>
      <Meals />
    </Fragment>
  );
}

export default App;
