import React from "react";
import "./Cart.css";
import { useShopContext } from "../../Hook/useShopContext";
import { Link } from "react-router-dom";
const Cart = () => {
  const { selectProduct } = useShopContext();
  let total = 0;
  let tax = 0;

  let items = 0;

  selectProduct &&
    selectProduct.map((product) => {
      const { price, quantity } = product;
      return  items = price * quantity
    });

  let cost = selectProduct.reduce(
    (cost, product) => cost + product.shipping,
    0
  );

  if (items > 20 || total > 20) {
    cost = 0;
  }
  if (items > 10 && total > 20) {
    cost = 4.99;
  }
  if (items > 0 && total > 20) {
    cost = 8.99;
  }

  if (items > 0) {
    tax = (2 / 100) * items;
  }

  total = items + tax + cost;

  const toFixed = (num) => {
    return num.toFixed(2);
  };

  return (
    <div className="cart-wrap">
      <div className="card-headding">
        <h3>Order Summary</h3>
        <p className=" margin">
          Items ordered: {selectProduct && selectProduct.length}
        </p>
      </div>
      <div className="card-content-wrap">
        <p>
          <small>Items:</small>
        </p>
        <p>
          <small>
            $<strong>{toFixed(items)}</strong>
          </small>
        </p>
      </div>
      <div className="card-content-wrap">
        <p>
          <small>Total tax:</small>
        </p>
        <p>
          <small>
            $<strong>{toFixed(tax)}</strong>
          </small>
        </p>
      </div>
      <div className="card-content-wrap">
        <p>
          <small>Shipping & handing:</small>
        </p>
        <p>
          <small>
            $<strong>{toFixed(cost)}</strong>
          </small>
        </p>
      </div>

      <div className="card-content-wrap">
        <h3>Order Total:</h3>
        <h3>
          $<strong>{toFixed(total)}</strong>
        </h3>
      </div>

      <div className="btn-center">
        <Link to="/revew" state={{ selectProduct, addShowCard: false }}>
          {" "}
          <button className="btn">Revew Order</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
