import React, { Component, useState } from "react";
import carrot from "../vegetables/images/carrot.jpg";
import onion from "../vegetables/images/onion.png";
import potato from "../vegetables/images/potato.jpg";
import { IconName } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartDetails from "../CartDetails/CartDetails";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
const vegetables = [
  {
    id: 1,
    name: "Carrots",
    price: 20,
    image: carrot,
    // quantity:1,
  },
  {
    id: 2,
    name: "Onions",
    price: 25,
    image: onion,
  },
  {
    id: 3,
    name: "Potatoes",
    price: 25,

    image: potato,
  },
  
];

const VegetableItems = ({handleAddProduct}) => {
 

  return (
    <div style={{ width: "100%", height: "80vh" }}>
      
      <h2 className="text-center mt-4 mb-5">Welcome to my store</h2>
      {vegetables.map((data, index) => (
        <div className="veg-parent" style={{ width: "60%", margin: " 0 auto" }}>
          <img
            src={data.image}
            style={{
              width: "100px",
              height: "50px",
              display: "inline-block",
              paddingTop: "10px",
              overflow: "hidden",
            }}
          />
          <h3
            style={{
              paddingLeft: "10%",
              marginTop: "5%",
              marginBottom: "5%",
              display: "inline-block",
            }}
          >
            {data.name}{" "}
          </h3>
          <span style={{ marginLeft: "20%" }}>$ {data.price}</span>{" "}
          <button
            onClick={() => handleAddProduct(data)}
            className="btn btn-success py-2  "
            style={{ marginLeft: "20%" }}
          >
            {" "}
            <AddShoppingCartIcon /> Add to cart
          </button>
          <hr />
          
        </div>

      ))}
    </div>
  );
};

export default VegetableItems;
