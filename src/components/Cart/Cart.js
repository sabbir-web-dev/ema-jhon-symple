import React from 'react';
import './Cart.css'
import { useShopContext } from '../../Hook/useShopContext';

const Cart = () => {
    const {addProduct} = useShopContext();
    return (
        <div className='cart-wrap'>
            <h3>Order Summary</h3>
            <p className=' margin'>Items ordered:</p>

            <div className="wrap">
                <p><small>Items:</small></p>
                <p><small>$</small></p>
            </div>
            <div className="wrap">
                <p><small>Total tax:</small></p>
                <p><small>$</small></p>
            </div>
            <div className="wrap">
                <p><small>Shipping & handing:</small></p>
                <p><small>$</small></p>
            </div>

            <div className="wrap">
                <h3>Order Total:</h3>
                <h3></h3>
            </div>


        </div>
    );

};

export default Cart;