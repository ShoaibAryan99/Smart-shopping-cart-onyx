import React, { Component, useState } from "react";
import { useHistory, Link } from "react-router-dom";

// import "./style.css";



const LoginScreen = () => {
  

  return (
    <div className="head">
      <div className="inside">
        <h3>Login</h3>
        <form  id="inside">
          <label>Email</label>
          <input
            
            type="text"
            name="email"
            placeholder="Enter Email"
          ></input>
          <br />
          <br />

          <label>Password</label>
          <input
           
            type="password"
            name="password"
            placeholder="Enter password"
          ></input>
          <br />
          <br />

          <Link to="/storefront" className="btn">Login</Link>
         
        </form>
      </div>
     
    </div>
  );
};

export default LoginScreen;
