import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
const Header = () => {
  return (
    
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-3">
        <div className="container-fluid">
          <Link to="/storefront" className="navbar-brand">
            Shopping Cart
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav" style={{ paddingLeft: "65%" }}>
              <li className="nav-item " style={{ paddingLeft: "50px" }}>
                <NavLink to="/storefront" className="nav-link " style={{marginRight:'82px'}}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cartdetails" className="nav-link ">
                  <AddShoppingCartIcon />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
  );
};

export default Header;
