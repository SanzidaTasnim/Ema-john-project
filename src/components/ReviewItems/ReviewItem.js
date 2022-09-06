import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
   const handleRemoveProduct = props.handleRemoveProduct;
   const {name , price, img , seller , quantity , id} = props.product;
   return (
      <div className="product-container">
         <div className="product-img">
            <img src={img} alt=""/>
         </div>
         <div className="product-info">
            <h2>{name}</h2>
            <p><small>{ seller }</small></p>
            <h4>${price}</h4>
            <h4>Product Quantity : {quantity}</h4>
            <button className="reviewCart" onClick = {() => handleRemoveProduct(id)}>Remove Item</button>
         </div>
      </div>
   );
};

export default ReviewItem;