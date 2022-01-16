import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "./style.css";
import vegetables from '../FrontPage/images/vegetables.jpg';
import fruits from '../FrontPage/images/fruits.jpg';
import breads from  '../FrontPage/images/breads.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'; 
import { IconName } from "react-icons/fa";


import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

  
const StoreFront = () => {
  return (
    <>
    
      <div className="boxbody">
          <div className="box">
            
            <div className="box-1">
            <img src={vegetables} style={{width:'300px',height:'220px'}}></img>

              <h3>Vegetables</h3>
              <p>
               items available: 3
              </p>
              <Link to="/vegetables"  className="button" > <AddShoppingCartIcon  style={{marginRight:'50px'}} />CLICK TO PURCHASE</Link>
              <br />
              {/* <Link to="/Universities">GO</Link> */}
            </div>

            <div className="box-1">
            <img src={fruits} style={{width:'300px'}}></img>
              <h3>Fruits</h3>
              <p>
             items available: 3
              </p>
              < Link to="/fruits" className="button" > <AddShoppingCartIcon  style={{marginRight:'50px'}} />CLICK TO PURCHASE</Link>
              <br />
              <br />

              {/* <Link to="/Tutorials">GO</Link> */}
            </div>
            <div className="box-1">
            <img src={breads} style={{width:'300px',height:'220px'}}></img>
              <h3>Breads</h3>
              <p>
               items available: 3
              </p>
              <Link to='/breads' className="button" > <AddShoppingCartIcon  style={{marginRight:'50px'}} />CLICK TO PURCHASE</Link>
              <br />
              <br />
              <br />
              {/* <Link to="/JobScreen">GO</Link> */}
            </div>
            
          </div>
        </div>
        
        </>
    
  );
};

export default StoreFront;
