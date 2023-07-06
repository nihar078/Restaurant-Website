import React, { Fragment } from "react";
import Header from "./components/Header/Header";
import RestaurantSummary from "./components/Layout/RestaurantSummary";

function App() {
  return (
    <Fragment>
      <Header />
      <RestaurantSummary />
    </Fragment>
  );
}

export default App;

