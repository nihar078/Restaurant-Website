import React, { useContext } from "react";
import Input from "../../UI/Input";
import classes from './MealItemForm.module.css'
import CartContext from "../../../store/cart-context";


const MealItemForm = (props) => {
    const cartcntx = useContext(CartContext)
    
    // console.log('reinitialized cartcntx', cartcntx)
    const addItemToCart = (event) => {
        event.preventDefault()
        //update the cartCntx.items
        const quantity = document.getElementById("amount" + props.id).value
        cartcntx.addItem({...props.item, quantity: quantity})
        
        // console.log("after addItemToCart",cartcntx)
    }
    return (
        <form className={classes.form}>
            {/* {console.log("inside render", cartcntx.items)} */}
            <Input 
            label ="Amount"
            input = {{
                id : "amount" + props.id,
                type: "number",
                min: 1,
                max: 5,
                defaultValue: 1
            }}/>
            <button onClick={addItemToCart}>+Add</button>
        </form>

    )
}

export default MealItemForm