import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import {Link} from 'react-router-dom';

const Product = (props) => {
   // console.log(props.item);
   const showAddToCart = props.showAddToCart;
   const { name , img , seller , price , stock , id} = props.item;
   
   return (
      <div className="product-container">
         <div className="product-img">
            <img src={img} alt="" />
         </div>
         <div className="product-info">
            <h3><Link to={'/product/' + id}>{name}</Link></h3>
            <p><small>By {seller}</small></p>
            <h4>Price: ${price}</h4>
            <p><small>only {stock} left in stock - order soon</small></p>
            {showAddToCart && <button className='addButton' onClick={() => props.handleClick(props.item)}>
            <FontAwesomeIcon icon={faShoppingCart} />
               Add To Cart
            </button>}
         </div>
      </div>
   );
};

export default Product;