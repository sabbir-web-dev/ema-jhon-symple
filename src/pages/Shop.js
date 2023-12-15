import React from "react";
import { useShopContext } from "../Hook/useShopContext";
import Product from "../components/product/Product";

import './Shop.css'
import Cart from "../components/Cart/Cart";

const Shop = () => {
  const {products} = useShopContext()

  return (
    <div className="shop">
      <div className="product-wrap">
        <div className="product">
          {products &&
            products.map(product => <Product key={product.key} product={product} /> )
          }
        </div>
        <div className="cart">
            <Cart />
        </div>
      </div>
    </div>
  );
};

export default Shop;
