import React, { useState } from 'react';
import './Cart.css'
import { useShopContext } from '../../Hook/useShopContext';

const Cart = () => {
    const {selectProduct} = useShopContext();
    
    const [items,setItems] = useState(0);
    const [totalText,setTotalText] = useState(0);
    const [shippingCost,setShippingConst] = useState(0);
    const [total,setTotal] = useState(0);

    selectProduct.map(product => {
        console.log(product)
        const {price,shipping} = product;

        let totalItem = items + price;
        console.log(totalItem)
        setItems(totalItem)
    } )
    


    return (
        <div className='cart-wrap'>
            <h3>Order Summary</h3>
            <p className=' margin'>Items ordered: {selectProduct && selectProduct.length}</p>

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