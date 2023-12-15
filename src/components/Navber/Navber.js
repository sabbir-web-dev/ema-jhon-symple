import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navber.css";

function Navber() {
  const [navPosition, setNavPosition] = useState(false);

  useEffect(() => {
    const handeleScroll = () => {
      if (window.scrollY > 100) {
        setNavPosition(true);
      } else {
        setNavPosition(false);
      }
    };

    window.addEventListener("scroll", handeleScroll);

    return () => {
      window.addEventListener("scroll", handeleScroll);
    }
  }, []);

  
  return (
    <nav className={navPosition ? "nav-fixt" : "nav-wrap"}>
      <div className="logo">Ema-joon</div>
      <ul className="">
        <NavLink className="link" to="/">
          Shop
        </NavLink>
        <NavLink className="link gap" to="/revew">
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
