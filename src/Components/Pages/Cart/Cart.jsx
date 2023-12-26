import React, { useEffect } from 'react';
import './cart.css';
import CartItems from './CartItems/CartItems';

const Cart = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <CartItems />
        </div>
    );
};

export default Cart;