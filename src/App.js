import React, { Component } from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import StoreFront from "./Components/FrontPage/storeFront";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { IconName } from "react-icons/fa";
import VegetableItems from "./Components/vegetables/vegetable";

import {
  BrowserRouter,
  Link,
  Route,
  Router,
  Switch,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import FruitsItems from "./Components/fruits/fruits";

import Header from "./Components/Header/header";
import CartDetails from "./Components/CartDetails/CartDetails";
import BreadItems from "./Components/Breads/breads";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };

  const handleDelete = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
  };
  const handleCartClear = () => {
    setCartItems([]);
  };

  return (
    <>
      <BrowserRouter>
      
      
        <div>
          <Header />
          <Switch>
         
             
            <Route path="/storefront" exact component={StoreFront} />
            <Route path="/vegetables" exact>
              {" "}
              <VegetableItems handleAddProduct={handleAddProduct} />{" "}
            </Route>
            <Route path="/fruits" excat>
              {" "}
              <FruitsItems handleAddProduct={handleAddProduct} />{" "}
            </Route>
            <Route path="/cartdetails" excat>
              {" "}
              <CartDetails
                cartItems={cartItems}
                handleAddProduct={handleAddProduct}
                handleDelete={handleDelete}
                handleRemoveProduct={handleRemoveProduct}
                handleCartClear={handleCartClear}
              />{" "}
            </Route>
            <Route path="/breads" excat>
              {" "}
              <BreadItems handleAddProduct={handleAddProduct} />{" "}
            </Route>
           
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
