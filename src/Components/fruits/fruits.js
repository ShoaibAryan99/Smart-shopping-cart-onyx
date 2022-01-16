import React, { Component } from "react";
import { ReactDOM } from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Apple from "../fruits/images/apple.jpg";
import banana from "../fruits/images/banana.jpg";
import orange from "../fruits/images/orange.jpg";
import { useCart } from "react-use-cart";

import { useState } from "react";
const fruitItems = [
  {
    id: 1,
    image: Apple,
    name: "Apple",
    price: 34,
  },
  {
    id: 2,
    image: banana,
    name: "Banana",
    price: 23,
  },
  {
    id: 1,
    image: orange,
    name: "Orange",
    price: 25,
  },
];

const FruitsItems = ({ handleAddProduct }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "7%",
        }}
      >
        {fruitItems.map((val) => (
          <div className="col-11 col-md-6 col-lg-2 mx-0 mb-4  ">
            <div className="card p-0 overflow-hidden  shadow">
              <img
                className="card-img-top img-fluid"
                src={val.image}
                style={{ height: "100px" }}
              ></img>
              <div className="card-body text-center ">
                <h3 className="card-title ">{val.name}</h3>
                <h4 className="card-title "> $ {val.price}</h4>
                <button
                  className="btn btn-success "
                  onClick={() => handleAddProduct(val)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FruitsItems;
