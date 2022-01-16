import React, { Component } from 'react';
import bananabread from '../Breads/images/bananabread.jpg';
import ryebread from '../Breads/images/ryebread.jpg';
import ciabatta from '../Breads/images/ciabatta.jpg';
const BreadItems = ({handleAddProduct}) => {
    const breadItems = [
        {
          id: 1,
          image:bananabread,
          name: "Banana Bread",
          price: 50,
          
        },
        {
          id: 2,
          image:ciabatta,
          name: "Ciabatta",
          price: 40,
        },
        {
          id: 1,
          image:ryebread,
          name: "RyeBread",
          price: 30,
        },
      ];
      
    return ( 

        <div style={{display:'flex',justifyContent:'space-evenly',marginTop:'7%'}}>
      
        {breadItems.map((stuff) => (
          <div className="col-11 col-md-6 col-lg-2 mx-0 mb-4  "   >
            <div className="card p-0 overflow-hidden h-100 shadow">
              <img className='card-img-top img-fluid' src={stuff.image} style={{height:'200px'}}></img>
              <div className="card-body text-center ">
                <h3 className="card-title ">{stuff.name}</h3>
                <h4 className="card-title "> $ {stuff.price}</h4>
                <button className="btn btn-success "  onClick={()=>handleAddProduct(stuff)}  >Add to Cart
                
                </button>
               
             
              </div>
              
  
  
  
            </div>
            
          </div>
        
        ))}
        
        
        
      </div> 
      
      
    );
}
 
export default BreadItems;