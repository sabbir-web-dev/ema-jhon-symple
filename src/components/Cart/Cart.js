import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;

    let total =0;
    let items = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        let singleProduct= cart[i].price;
        total = total + product.price;
        items= items+ singleProduct;
        
    }
    let shipping = 0;
    if(total > 35){
        shipping =0;
    }
    else if (total > 12){
        shipping = 4.99;
    }
    else if (total > 0){
        shipping = 12.00;
    }

    const vat = total/5;

    let grendTotal = total+ shipping + vat;
    function formetNum (num){
        const number = num.toFixed(2);
        return Number(number);
    }
    return (
        <div className='cart-wrap'>
            <h3>Order Summary</h3>
            <p className=' margin'>Items ordered:{cart.length}</p>

            <div className="wrap">
                <p><small>Items:</small></p>
                <p><small>${formetNum(items)}</small></p>
            </div>
            <div className="wrap">
                <p><small>Total tax:</small></p>
                <p><small>${formetNum(vat)}</small></p>
            </div>
            <div className="wrap">
                <p><small>Shipping & handing:</small></p>
                <p><small>${formetNum(shipping)}</small></p>
            </div>

            <div className="wrap">
                <h3>Order Total:</h3>
                <h3>{formetNum(grendTotal)}</h3>
            </div>


        </div>
    );

};

export default Cart;