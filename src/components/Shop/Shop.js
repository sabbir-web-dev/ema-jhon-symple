import React, { useState } from "react";
import fakeData from "../../fakeData";
import Product from "../product/Product";
import "./Shop.css";
import Cart from "../Cart/Cart";

const Shop = () => {
  const fast10 = fakeData.slice(0, 10);
  const [product, setproduct] = useState(fast10);
  const[cart,setCart] = useState([])

  function btnHendeler(product) {
    const newCart = [...cart,product];
    setCart(newCart)

  }
  return (
    <div>
      <div className="product-wrap">
        <div className="product">
          {product.map((product) => (
            <Product product={product} btnHendeler={btnHendeler}></Product>
          ))}
        </div>
        <div className="cart">
            <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
