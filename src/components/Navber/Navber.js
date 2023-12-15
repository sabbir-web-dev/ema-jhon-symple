import React from "react";
import { NavLink } from "react-router-dom";
import "./Navber.css"

function Navber() {
  return (
    <nav className="nav-wrap">
      <div className="logo">Ema-joon</div>
      <ul>
        <NavLink className="link" to="/">
          Shop
        </NavLink>
        <NavLink className="link" to="/revew">
          Revew
        </NavLink>
        <NavLink className="link" to="/inventory">
          Inventory
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navber;
