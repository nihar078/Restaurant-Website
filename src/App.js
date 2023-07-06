import React, { Fragment, useState } from "react";
import Header from "./components/Header/Header";
import Meals from "./components/Layout/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  useState()
  return (
    <Fragment>
      <Cart />
      <Header />
      <Meals />
    </Fragment>
  );
}

export default App;
