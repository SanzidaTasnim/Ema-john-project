import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
   // console.log(props.item);
   const { name , img , seller , price , stock} = props.item;
   
   return (
      <div className="product-container">
         <div className="product-img">
            <img src={img} alt="" />
         </div>
         <div className="product-info">
            <h3>{name}</h3>
            <p><small>By {seller}</small></p>
            <h4>Price: ${price}</h4>
            <p><small>only {stock} left in stock - order soon</small></p>
            <button className='addButton' onClick={() => props.handleClick(props.item)}>
            <FontAwesomeIcon icon={faShoppingCart} />
               Add To Cart
            </button>
         </div>
      </div>
   );
};

export default Product;