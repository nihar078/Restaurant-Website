import React, { Fragment } from "react";
import RestaurantSummary from "./RestaurantSummary";
import AvailabeiMeals from "./AvailabelMeals";


const Meals = () => {
    return (
        <Fragment>
            <RestaurantSummary />
            <AvailabeiMeals />
        </Fragment>
    )
}
export default Meals