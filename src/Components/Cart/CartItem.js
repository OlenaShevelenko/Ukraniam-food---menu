import dataDishes from "../../data/dataDishes";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";


const CartItem = ({cartItem}) => {
    // console.log (cartItem)

    const dishes = dataDishes.find( item => item.id === cartItem.dishId)
    // console.log( dishes)

    const dispatch = useDispatch();

    return(
        <div  >
            <div className="App_Cart">
                <div>
                    <img className="cartPic" alt="dish" src={`./${dishes.img}.jpg` }/>
                </div>
                <div>
                    <p>{dishes.name}</p>
                    <p>{dishes.ukr_name}</p>
                    <p>${dishes.price * cartItem.quantity}</p>
                    <p>{cartItem.quantity} porsion(s)</p> 

                    <span onClick={ () => dispatch(removeItemFromCart( {cartItemId: cartItem.id}))}>
                        <img alt='delete' className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png"/> 
                    </span>

                </div>
            </div>
            <p>___________________________</p>

        </div>
        
    )
}

export default CartItem;