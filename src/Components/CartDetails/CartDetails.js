import React, { Component, useState } from "react";
import "./cartDetails.css";

const CartDetails = ({
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleDelete,
  handleCartClear,
}) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <>
      <div className="cart-items">
        <h2 className="cart-items-header">Cart Items </h2>
        <div className="clear-cart">
          {cartItems.length >= 1 && (
            <button className="clear-cart-button" onClick={handleCartClear}>Clear</button>
          )}
        </div>
        {cartItems.length === 0 && (
          <div className="cart-items-empty" className="">
            No items added in the cart
          </div>
        )}
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-items-list">
              {/* <img className="cart-items-img">{item.img}</img> */}

              <img src={item.image} className="cart-items-img" />

              <div className="cart-items-name">{item.name}</div>
              <div className="cart-items-function">
                <button
                  className="cart-items-remove"
                  onClick={() => handleRemoveProduct(item)}
                >
                  -
                </button>
                <button
                  className="cart-items-add"
                  onClick={() => handleAddProduct(item)}
                >
                  +
                </button>
              </div>
              <div className="cart-items-price">
                {item.quantity} * ${item.price}
              </div>

              <div>
                <button
                  className="cart-items-delete"
                  onClick={() => handleDelete(item)}
                >
                  remove
                </button>
              </div>
            </div>
          ))}
          <div className="cart-items-total-price-name">
            Total Price :
            <div className="cart-items-total-price"> ${totalPrice}</div>
          </div>

          {/* <VegetableItems handleAddProduct={handleAddProduct} /> */}
        </div>
      </div>
    </>
  );
};

export default CartDetails;
