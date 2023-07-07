import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { name, img, seller, price, stock } = props.product;
  

  return (
    <div className="single-product-wrap">
      <div className="product-left">
        <img src={img} alt="" />
      </div>
      <div className="product-right">
        <h4 className="product-name">{name}</h4>
        <br />
        <p>
          <small>by:{seller}</small>
        </p>
        <p>
          <strong>${price}</strong>
        </p>
        <p>
          <small>Only {stock} leftin stock - Oder soon</small>
        </p>
        <button className="btn" onClick={()=>{props.btnHendeler(props.product)}} >
          <FontAwesomeIcon icon={faShoppingCart} /> add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
