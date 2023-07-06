import React from "react";
import classses from "./RestaurantSummary.module.css";

const RestaurantSummary = () => {
  return (
    <section className={classses.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};
export default RestaurantSummary;
