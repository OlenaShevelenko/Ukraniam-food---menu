import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";


const Cart = () => {
    const cartItems = useSelector (getCartItems);
    const totalPrice = useSelector (getTotalPrice);

    return(
        <div className='box_border'>
            <img alt="cart" className="cartIcon" src="https://cdn-icons-png.flaticon.com/512/557/557464.png?w=740&t=st=1675624686~exp=1675625286~hmac=609d7e40ecf47e596dce78b8bbb7cb9cee315f0fd560ae1b693a24c619d8d70a"/> 
            {cartItems.map (cartItem => <CartItem cartItem={cartItem} key={cartItem.id}/>)}
            <p><b>TOTAL: $ {totalPrice}</b></p>
            <div >
                <p className="wish">  Enjoy your food </p>
                <p className="wish">  Смачного </p>
            </div>

        </div>
    )
}

export default Cart;