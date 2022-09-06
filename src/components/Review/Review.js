import React, { useEffect } from "react";
import { useState } from "react";
import image from './../../images/giphy.gif'
import Cart from "../Cart/Cart.js";
import ReviewItem from "../ReviewItems/ReviewItem.js";
import fakeData from "./../../fakeData/products.json";
import { Link } from 'react-router-dom';
import {
   getDatabaseCart,
   processOrder,
   removeFromDatabaseCart,
 } from "../../utilities/databaseManager.js";

const Review = () => {
  const [cart, setCart] = useState([]);
  const [orderPlaced , setOrderPlaced] = useState(false);
  const handleRemoveProduct = (productKey) => {
    const newCart = cart.filter((pd) => pd.id !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  };

  const placedOrderClick = () => {
    processOrder(cart);
    setCart([]);
    setOrderPlaced(true);
  }

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);

    const cardProducts = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.id === key);
      product.quantity = savedCart[key];
      return product;
    });
    setCart(cardProducts);
    // console.log(cardProducts);
  }, []);

  let thankYou;

  if(orderPlaced){
   thankYou = <img src={image} alt="" />
  }
  return (
    <div className="shop">
      <div className="shop-product">
        {cart.map((pd, index) => (
          <ReviewItem
            product={pd}
            key={index}
            handleRemoveProduct={handleRemoveProduct}
          />
        ))}
        {
         thankYou
        }
      </div>
      <div className="shop-cart">
        <Cart cart={cart}>
          <Link to="/review">
            <button className="reviewCart" onClick = {placedOrderClick}>Place Your Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Review;
