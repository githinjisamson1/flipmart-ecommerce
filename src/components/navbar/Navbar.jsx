import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // applying styles based on isActive boolean flag
  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "none",
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "#fff" : "#eee",
    };
  };

  return (
    <header>
      <div className="logo">
        <h1>
          <NavLink to="products">FlipMart</NavLink>
        </h1>
      </div>

      <div className="navigation-links">
        <NavLink style={navLinkStyles} to="products">
          Products
        </NavLink>
        <NavLink style={navLinkStyles} to="shoppingCart">
          <i className="fa-solid fa-bag-shopping"></i>
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
