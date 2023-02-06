import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";

const Dish = ({dish}) => {
    const [quantity, setQuantity] = useState (1);
    const dispatch = useDispatch ();

    return (
        <div>
            <h1>{dish.name} </h1>
            <h3>{dish.ukr_name} </h3>
            <img alt="dish" src={`./${dish.img}.jpg`}/>
            <p>$ {dish.price}</p>
            <span>
                <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
                <button onClick={ () => { dispatch(addToCart({dish, quantity})) }}> Add to cart </button>
            </span>
            <p>_________________</p>

        </div>
    )
}

export default Dish;