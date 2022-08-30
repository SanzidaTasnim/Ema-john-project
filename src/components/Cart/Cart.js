import React from 'react';
import './Cart.css';

const Cart = (props) => {
   const cart = props.cart;
   const totalPrice = cart.reduce((total,pd) => total + pd.price, 0);

   let shipping = 12;
   if(totalPrice > 200) {
      shipping = 0;
   }else if(totalPrice > 100){
      shipping = 8;
   }else if(totalPrice == 0){
      shipping = 0;
   }

   const tax = totalPrice * 0.10 ;
   const grandTotal = totalPrice + shipping + tax;
   
   return (
      <div>
         <h2>Order Summary</h2>
         <h4>Items Order :  {cart.length}</h4>
         <h5>Shipping & Handling: ${shipping}</h5>
         <h5>Tax & Vat: ${tax} </h5>
         <h5>Total Price: ${totalPrice} </h5>
         <h5>Subtotal: ${grandTotal}</h5>
         <button className='reviewCart'>Review Your Order</button>
      </div>
   );
};

export default Cart;